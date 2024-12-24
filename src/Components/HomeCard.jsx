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
    <div className="min-h-screen  py-8 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 mx-auto mt-10">
        {posts.map((post) => (
          <div
            key={post._id}
            className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {post.photo && (
              <img
                src={post.photo}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <div className="p-5">
              <h3 className="text-lg font-bold  mb-2">{post.title}</h3>
              <div className="text-sm  mb-4">
                <p>
                  Category:{" "}
                  <span className="font-medium ">{post.category}</span>
                </p>
                <p>
                  Location:{" "}
                  <span className="font-medium ">{post.location}</span>
                </p>
                <p>
                  Deadline:{" "}
                  <span className="font-medium text-red-500 dark:text-red-400">
                    {new Date(post.deadLine).toLocaleDateString()}
                  </span>
                </p>
                <p>
                  Volunteers Needed:{" "}
                  <span className="font-medium text-blue-500 dark:text-blue-400">
                    {post.noofvolunteer}
                  </span>
                </p>
              </div>
              <button
                onClick={() => navigate(`/VoulenteerDetails/${post._id}`)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link to="/allVolunteer">
          <button className="btn bg-[#EF4C53] text-white py-2 rounded-md hover:bg-red-600 transition">
            View All Volunteer Post
          </button>
        </Link>
      </div>
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center mt-6">
          <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedsNow;
