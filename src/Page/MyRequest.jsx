import { FiCheckCircle } from "react-icons/fi"; // Import React Icon

const MyRequest = () => {
  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">
          My Volunteer Requests
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          6 Requests
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
                      <div className="flex items-center gap-x-3 font-semibold ">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm text-left rtl:text-right font-semibold "
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      Teach Coding to Underprivileged Kids
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      28/05/2024
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                          Education
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div
                        className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                        <h2 className="text-sm font-normal">Pending</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button
                        title="Mark Complete"
                        className="text-gray-500 transition-colors duration-200 hover:text-green-500 focus:outline-none"
                      >
                        <FiCheckCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
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
