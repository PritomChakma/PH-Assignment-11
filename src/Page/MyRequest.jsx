import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoArchiveOutline } from "react-icons/io5";
import { AuthContex } from "../Provider/AuthProvider";
import useAxiosSecure from "../hook/useAxiosSecure";
const MyRequest = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContex);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchMyRequest();
    }
  }, [user,axiosSecure]);

  const fetchMyRequest = async () => {
    try {
      const { data } = await axiosSecure.get(
        `/request/${user?.email}`
      );
      setRequest(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast.error("Failed to fetch requests.");
    }
  };

  const handleChangeStatus = async (id, prevStatus, status) => {
    if (prevStatus === status)
      return console.log("Status is already " + status);

    try {
      const { data } = await axiosSecure.patch(
        `/reqStatus-update/${id}`,
        { status }
      );
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
      <h2 className="text-lg font-medium ">
        My Volunteer Requests
      </h2>
      <span className="px-3 py-1 text-xs bg-[#00DF9A] text-white rounded-full">
        {request.length} Requests
      </span>
    </div>
  
    <div className="flex flex-col mt-6">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border  md:rounded-lg">
            <table className="min-w-full divide-y ">
              <thead className="bg-[#EF4C53] text-white">
                <tr>
                  <th className="py-3.5 px-4 text-sm font-semibold text-left">
                    Title
                  </th>
                  <th className="px-4 py-3.5 text-sm font-semibold text-left">
                    Deadline
                  </th>
                  <th className="px-4 py-3.5 text-sm font-semibold text-left">
                    Category
                  </th>
                  <th className="px-4 py-3.5 text-sm font-semibold text-left">
                    Status
                  </th>
                  <th className="px-4 py-3.5 text-sm font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {request.map((req) => (
                  <tr key={req._id}>
                    <td className="px-4 py-4 text-sm ">
                      {req.title}
                    </td>
                    <td className="px-4 py-4 text-sm ">
                      {new Date(req.deadLine).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-sm ">
                      {req.category}
                    </td>
                    <td className="px-4 py-4 text-sm ">
                      {req.status}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button
                        onClick={() =>
                          handleChangeStatus(req._id, req.status, "Completed")
                        }
                        className="flex items-center gap-1 text-red-500 dark:text-red-400 transition duration-200"
                        disabled={
                          req.status === "Completed" || req.status === "Rejected"
                        }
                      >
                        <IoArchiveOutline className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default MyRequest;
