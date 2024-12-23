import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"; // Importing React Icons

const VouleenterRequest = () => {
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
                      <div className="flex items-center gap-x-3 font-semibold ">
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-semibold  text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right "
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right "
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right "
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 text-sm  whitespace-nowrap">
                    Beach Cleanup Drive
                    </td>
                    <td className="px-4 py-4 text-sm  whitespace-nowrap">
                      chakmapritom1@gmail.com
                    </td>

                    <td className="px-4 py-4 text-sm  whitespace-nowrap">
                      28/05/2024
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <p className="px-3 py-1 rounded-full ">
                          Education
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <h2 className="text-sm font-normal">Complete</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        {/* Complete Button */}
                        <button className="disabled:cursor-not-allowed  transition-colors duration-200 hover:text-green-500 focus:outline-none">
                          <AiOutlineCheckCircle className="w-5 h-5" />
                        </button>

                        {/* Delete Button */}
                        <button className="disabled:cursor-not-allowed  transition-colors duration-200 hover:text-red-500 focus:outline-none">
                          <AiOutlineCloseCircle className="w-5 h-5" />
                        </button>
                      </div>
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

export default VouleenterRequest;
