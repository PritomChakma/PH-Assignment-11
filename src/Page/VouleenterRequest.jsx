import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { AuthContex } from "../Provider/AuthProvider";
import useAxiosSecure from "../hook/useAxiosSecure";

const VolunteerRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContex);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchMyRequest();
    }
  }, [user]);

  const fetchMyRequest = async () => {
    try {
      const { data } = await axiosSecure.get(
        `/vouleenter-request/${user?.email}?volunteer=true`

      );
      setRequest(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast.error("Failed to fetch requests.");
    }
  };

  const handleChangeStatus = async (id, prevStatus, status) => {
    if (prevStatus === status || prevStatus === "Completed") {
      return console.log("Not Allowed");
    }

    try {
      const { data } = await axiosSecure.patch(`/reqStatus-update/${id}`, {
        status,
      });
      toast.success(`Status changed to ${status}`);

      setRequest((prevRequests) =>
        prevRequests.map((req) => (req._id === id ? { ...req, status } : req))
      );
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-semibold ">Volunteer Requests</h2>
        <span className="px-3 py-1 text-xs bg-[#00DF9A] text-white rounded-full">
          {request.length} Requests
        </span>
      </div>

      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border  md:rounded-lg">
            <table className="min-w-full divide-y  table-auto">
              <thead className="bg-[#EF4C53] text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-left">
                    Title
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-left">
                    Email
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-left">
                    Deadline
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-left">
                    Category
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-left">
                    Status
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="0">
                {request.map((req) => (
                  <tr key={req._id}>
                    <td className="px-4 py-4 text-sm ">{req.title}</td>
                    <td className="px-4 py-4 text-sm ">{req.email}</td>
                    <td className="px-4 py-4 text-sm ">
                      {new Date(req.deadLine).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-sm ">{req.category}</td>
                    <td className="px-4 py-4 text-sm ">{req.status}</td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleChangeStatus(req._id, req.status, "Accepted")
                          }
                          className="flex items-center gap-1 text-green-500 dark:text-green-400 transition duration-200 hover:text-green-700 dark:hover:text-green-600"
                          disabled={
                            req.status === "Completed" ||
                            req.status === "Rejected"
                          }
                        >
                          <AiOutlineCheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            handleChangeStatus(req._id, req.status, "Rejected")
                          }
                          className="flex items-center gap-1 text-red-500 dark:text-red-400 transition duration-200 hover:text-red-700 dark:hover:text-red-600"
                          disabled={
                            req.status === "Completed" ||
                            req.status === "Rejected"
                          }
                        >
                          <AiOutlineCloseCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerRequest;
