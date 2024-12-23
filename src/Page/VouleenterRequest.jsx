import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { AuthContex } from "../Provider/AuthProvider";

const VouleenterRequest = () => {
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
        `${import.meta.env.VITE_API_URL}/vouleenter-request/${user?.email}`
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
          Volunteer Requests
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          4 Requests
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                    >
                      <div className="flex items-center gap-x-3 font-semibold">
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {request.map((req) => (
                    <tr key={req._id}>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {req.title}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {req.email}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {new Date(req.deadLine).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p className="px-3 py-1 rounded-full">
                            {req.category}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <h2 className="text-sm font-normal">Complete</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            className="transition-transform duration-200 transform focus:outline-none text-green-500 p-2 rounded-full border border-transparent "
                            aria-label="Complete"
                          >
                            <AiOutlineCheckCircle className="w-6 h-6" />
                          </button>

                          <button
                            className="transition-transform duration-200 transform  focus:outline-none text-red-500 p-2 rounded-full border border-transparent "
                            aria-label="Delete"
                          >
                            <AiOutlineCloseCircle className="w-6 h-6" />
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
      </div>
    </section>
  );
};

export default VouleenterRequest;
