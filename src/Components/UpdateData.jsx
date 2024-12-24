import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const UpdateData = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/update/${id}`
        );
        setPosts(response.data);
        setStartDate(new Date(response.data.deadLine));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.job_title.value;
    const email = user?.email;
    const category = form.category.value;
    const deadLine = startDate;
    const description = form.description.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const noofvolunteer = form.noofvolunteer.value;

    const Data = {
      title,
      volunteer: {
        name: user?.displayName,
        email: user?.email,
      },
      category,
      deadLine,
      description,
      location,
      noofvolunteer,
    };

    console.log(Data);

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/updatedPost/${id}`, Data);
      form.reset();
      toast.success("Data Updated Successfully!");
      navigate("/myPost");
    } catch (error) {
      toast.error("Update Failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] sm:my-6">
      <section className="p-4 sm:p-6 mx-auto rounded-md shadow-md w-11/12 md:w-8/12 border-2">
        <h2 className="text-lg font-semibold capitalize text-center mb-5">
          Edit Volunteer Post
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <div>
              <label className="">Post Title</label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                defaultValue={posts?.title}
                className="block w-full px-4 py-2 mt-2   rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="">Deadline</label>
              <DatePicker
                selected={startDate}
                // onChange={(date) => setStartDate(date)}
                className="block w-full border p-2 rounded-md"
              />
            </div>

            <div>
              <label className="" >
                Organizer Email
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="block w-full px-4 py-2 mt-2   rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="" >
                Organizer Name
              </label>
              <input
                id="organizer_name"
                type="text"
                name="organizer_name"
                defaultValue={user?.displayName}
                readOnly
                className="block w-full px-4 py-2 mt-2  rounded-md focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={posts?.category}
                className="block w-full border p-2 rounded-md"
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="social service">Social Service</option>
                <option value="animal welfare">Animal Welfare</option>
              </select>
            </div>

            <div>
              <label className="" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                defaultValue={posts?.location}
                // onChange={(e) =>
                //   setPosts({ ...posts, location: e.target.value })
                // }
                className="block w-full px-4 py-2 mt-2rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="">Thumbnail</label>
              <input
                type="text"
                name="photo"
                defaultValue={posts?.photo}
                placeholder="Enter photo URL"
                className="block w-full px-4 py-2 mt-2 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="" htmlFor="noofvolunteer">
                No. of volunteers needed:
              </label>
              <input
               defaultValue={posts?.noofvolunteer}
                id="noofvolunteer"
                name="noofvolunteer"
                type="number"
                className="block w-full px-4 py-2 mt-2 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="">Description</label>
            <textarea
              className="block w-full px-4 py-2 mt-2 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              name="description"
              id="description"
              defaultValue={posts?.description}
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="block w-full btn bg-[#EF4C53] text-white font-bold"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateData;
