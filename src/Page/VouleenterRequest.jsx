import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { AuthContex } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const VolunteerRequest = () => {
  const { user } = useContext(AuthContex);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchMyRequest();
    }
  }, [user]);

  const fetchMyRequest = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/vouleenter-request/${user?.email}?volunteer=true`
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
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/reqStatus-update/${id}`,
        { status }
      );
      toast.success(`Status changed to ${status}`);

   
      setRequest((prevRequests) =>
        prevRequests.map((req) =>
          req._id === id ? { ...req, status } : req
        )
      );
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Volunteer Requests</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {request.length} Requests
        </span>
      </div>

      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-left text-gray-600">Title</th>
                  <th className="px-4 py-3 text-sm font-semibold text-left text-gray-600">Email</th>
                  <th className="px-4 py-3 text-sm font-semibold text-left text-gray-600">Deadline</th>
                  <th className="px-4 py-3 text-sm font-semibold text-left text-gray-600">Category</th>
                  <th className="px-4 py-3 text-sm font-semibold text-left text-gray-600">Status</th>
                  <th className="px-4 py-3 text-sm font-semibold text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {request.map((req) => (
                  <tr key={req._id}>
                    <td className="px-4 py-4 text-sm text-gray-700">{req.title}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">{req.email}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      {new Date(req.deadLine).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">{req.category}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">{req.status}</td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleChangeStatus(req._id, req.status, "Accepted")}
                          className="flex items-center gap-1 text-green-500 transition duration-200 hover:text-green-700"
                          disabled={req.status === "Completed" || req.status === "Rejected"}
                        >
                          <AiOutlineCheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleChangeStatus(req._id, req.status, "Rejected")}
                          className="flex items-center gap-1 text-red-500 transition duration-200 hover:text-red-700"
                          disabled={req.status === "Completed" || req.status === "Rejected"}
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
