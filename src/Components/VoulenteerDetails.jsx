import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import useAxiosSecure from "../hook/useAxiosSecure";

const VolunteerDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useContext(AuthContex);

  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosSecure.get(
          `/update/${id}`
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
    const deadLine = post?.deadLine;
    const suggestion = form.suggestion.value;
    const postId = post?._id;
    const volunteer = post?.volunteer;

    if (user?.email === volunteer?.email)
      return toast.error("Action not permitted!");

    const data = {
      name,
      email,
      title,
      location,
      category,
      suggestion,
      noofvolunteer,
      postId,
      deadLine,
      status: "Pending",
      volunteer: volunteer?.email,
    };

    try {
      const response = await axiosSecure.post(
        `/add-request`,
        data
      );

      toast.success("Request Successful!!!");
      form.reset();
      console.log(response.data);
      navigate("/myRequest");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen  py-8 transition-colors duration-300">
      <div className="w-11/12 md:w-7/12 lg:w-6/12 mx-auto  p-8 border-2 rounded-lg shadow-lg transition-colors duration-300">
        <h1 className="text-3xl font-bold  mb-6">
          {post.title}
        </h1>
        {post.photo && (
          <img
            referrerPolicy="no-referrer"
            src={post.photo}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
          />
        )}
        <p className="mb-4 ">
          <h2>
            <span className="font-bold">Category:</span> {post.category}
          </h2>
        </p>
        <p className="mb-4 ">
          <h2>
            <span className="font-bold">Location:</span> {post.location}
          </h2>
        </p>
        <p className="mb-4 ">
          <h2>
            <span className="font-bold">Deadline:</span>{" "}
            {new Date(post.deadLine).toLocaleDateString()}
          </h2>
        </p>
        <p className="mb-4 ">
          <h2>
            <span className="font-bold">No. of Volunteers Needed:</span>{" "}
            {post.noofvolunteer}
          </h2>
        </p>
        <p className="mb-4 ">
          <h2>
            <span className="font-bold">Description:</span> {post.description}
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
        <form
          onSubmit={handleSubmit}
          className="modal-box rounded-lg  transition-colors duration-300"
        >
          <h3 className="text-2xl font-bold ">
            Volunteer Request
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold ">
                Title:
              </label>
              <input
                name="title"
                type="text"
                defaultValue={post.title}
                readOnly
                className="w-full  rounded-md p-2 shadow-sm focus:outline-none border-2"
              />
            </div>
            <div>
              <label className="block font-semibold ">
                Suggestion:
              </label>
              <textarea
                name="suggestion"
                className="w-full  rounded-md p-2 shadow-sm focus:outline-none border-2 h-20"
                placeholder="Write your suggestion here..."
              ></textarea>
            </div>
          </div>

          <div className="modal-action flex items-center justify-between">
            <label
              htmlFor="my_modal_6"
              className="btn  rounded-md hover:bg-gray-600"
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
