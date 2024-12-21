import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const AddVolunteer = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContex);
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.job_title.value;
    const email = form.email.value;
    const category = form.category.value;
    const deadLine = startDate;
    const description = form.description.value;
    const location = form.location.value;
    const thumbel = form.thumbel.value;
    const formData = {
      title,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      category,
      deadLine,
      description,
      location,
      thumbel,
    };
    // try {
    //   // make a post request
    //   await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, formData);
    //   form.reset();
    //   toast.success("Data Added SuccessFully !!!");
    //   navigate("/my-posted-jobs");
    // } catch (error) {
    //   toast.success(error.message);
    // }
  };
  return (
    <div className="md:flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-2  md:p-6 mx-auto bg-white rounded-md shadow-md w-11/12 md:w-8/12 border-2">
        <h2 className="text-lg font-semibold text-gray-700 capitalize text-center mb-5">
          Add volunteer Post
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Post Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled={true}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="healthcare">healthcare</option>
                <option value="education">education</option>
                <option value=" social service"> social service</option>
                <option value=" animal welfare"> animal welfare</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Thumbel
              </label>
              <input
                id="thumbel"
                name="thumbel"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="w-full btn bg-[#EF4C53] text-white font-bold">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteer;
