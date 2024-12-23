import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContex } from "../Provider/AuthProvider";

const MyRequest = () => {
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
        `${import.meta.env.VITE_API_URL}/request/${user?.email}`
      );
      setRequest(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Failed to fetch posts.");
    }
  };
  console.log(request);
  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">
          My Volunteer Requests
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {request.length} Requests
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {request.map((req) => (
                    <tr key={req._id}>
                      <td className="px-4 py-4 text-sm">{req.title}</td>
                      <td className="px-4 py-4 text-sm">
                        {new Date(req.deadLine).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-sm">{req.category}</td>
                      <td className="px-4 py-4 text-sm">{req.status}</td>
                      <td className="px-4 py-4 text-sm">
                        <button
                          onClick={() => confirmDelete(post._id)}
                          className="flex items-center gap-1 text-red-500 transition duration-200"
                        >
                          <FaTrashAlt className="w-4 h-4" />
                          Delete
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
