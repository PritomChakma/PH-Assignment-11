import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-volunteer`
        );

        const sortedPosts = response.data
          .filter((post) => new Date(post.deadLine) >= new Date())
          .sort((a, b) => new Date(a.deadLine) - new Date(b.deadLine))
          .slice(0, 6);
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="flex justify-center my-5">
        <Link to="/allVolunteer">
          <button className="btn bg-[#EF4C53] text-white py-2 rounded-md ">
            View All Volunteer Post
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 mx-auto">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white p-4 rounded-md shadow-md border hover:shadow-lg"
          >
            <img
              src={post?.photo}
              alt={post?.title}
              className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600">Category: {post.noofvolunteer}</p>
            <p className="text-gray-600">Category: {post.category}</p>
            <p className="text-gray-600">
              Deadline:
              {new Date(post?.deadLine).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <button
              onClick={() => navigate(`/VoulenteerDetails/${post._id}`)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
