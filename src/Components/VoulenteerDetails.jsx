import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const VolunteerDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContex);

  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/update/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("User Email:", user?.email);
    console.log("Post Email:", post?.email);

    // Validation
    if (user?.email === post?.email) {
      toast.error("Not Permitted");
      return;
    }

    const form = e.target;
    const name = user?.displayName;
    const title = post?.title;
    const location = post?.location;
    const category = post?.category;
    const noofvolunteer = post?.noofvolunteer;
    const email = user?.email;
    const suggestion = form.suggestion.value;

    const data = {
      name,
      email,
      title,
      location,
      category,
      suggestion,
      noofvolunteer,
    };

    console.table(data);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-request`,
        data
      );

      form.reset();

      toast.success("Request Successful!!!");
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data);
    }
  };

  if (!post._id) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-11/12 md:w-7/12 lg:w-6/12 mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
        {post.photo && (
          <img
            referrerPolicy="no-referrer"
            src={post.photo}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
          />
        )}
        <p className="mb-4 text-gray-700">
          <h2>
            <span className="font-bold">Category:</span> {post.category}
          </h2>
        </p>
        <p className="mb-4 text-gray-700">
          <h2>
            <span className="font-bold">Location:</span>
            {post.location}
          </h2>
        </p>
        <p className="mb-4 text-gray-700">
          <h2>
            <span className="font-bold"> Deadline:</span>{" "}
            {new Date(post.deadLine).toLocaleDateString()}
          </h2>
        </p>
        <p className="mb-4 text-gray-700">
          <h2>
            <span className="font-bold"> No. of Volunteers Needed:</span>
            {post.noofvolunteer}
          </h2>
        </p>
        <p className="mb-4 text-gray-700">
          <h2>
            <span className="font-bold"> Description</span>
            {post.description}
          </h2>
        </p>
        <div className="flex items-center gap-4 mt-6">
          <label
            htmlFor="my_modal_6"
            className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition cursor-pointer"
          >
            Be a Volunteer
          </label>
          <button
            onClick={() => navigate("/allVolunteer")}
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={handleSubmit} className="modal-box rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800">
            Volunteer Request
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">
                Title:
              </label>
              <input
                name="title"
                type="text"
                defaultValue={post.title}
                readOnly
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Location:
              </label>
              <input
                name="location"
                type="text"
                defaultValue={post.location}
                readOnly
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Category:
              </label>
              <input
                name="category"
                type="text"
                defaultValue={post.category}
                readOnly
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 ">
                Volunteer Name:
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Volunteer Email:
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                readOnly
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                No. of volunteers needed:
              </label>
              <input
                name="noofvolunteer"
                type="noofvolunteer"
                defaultValue={post?.noofvolunteer}
                readOnly
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Suggestion:
              </label>
              <textarea
                name="suggestion"
                className="w-full border-gray-300 rounded-md p-2 shadow-sm focus:outline-none border-2 h-20"
                placeholder="Write your suggestion here..."
              ></textarea>
            </div>
          </div>

          <div className="modal-action flex items-center justify-between">
            <label
              htmlFor="my_modal_6"
              className="btn bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </label>
            <button
              type="submit"
              className="btn bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerDetails;
