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
    <div className="min-h-screen py-8 transition-colors duration-300">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-9/12 mx-auto mt-10">
      {posts.map((post) => (
        <div
          key={post._id}
          className="rounded-lg shadow-md border hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          {post.photo && (
            <img
              src={post.photo}
              alt={post.title}
              className="w-full h-36 object-cover rounded-t-lg" // Reduced height of image
            />
          )}
          <div className="p-3"> {/* Reduced padding */}
            <h3 className="text-md font-semibold mb-2">{post.title}</h3> {/* Reduced font size */}
            <div className="text-sm mb-4">
              <p>
                Category: <span className="font-medium">{post.category}</span>
              </p>
              <p>
                Location: <span className="font-medium">{post.location}</span>
              </p>
              <p>
                Deadline:{" "}
                <span className="font-medium text-red-500">
                  {new Date(post.deadLine).toLocaleDateString()}
                </span>
              </p>
              <p>
                Volunteers Needed:{" "}
                <span className="font-medium text-blue-500">
                  {post.noofvolunteer}
                </span>
              </p>
            </div>
            <button
              onClick={() => navigate(`/VoulenteerDetails/${post._id}`)}
               className="w-full btn text-white bg-[#2c3e50] hover:bg-[#d8434a] transition-all duration-150 py-1 text-sm"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center my-5">
      <Link to="/allVolunteer">
        <button className="btn bg-[#EF4C53] text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
          View All Volunteer Posts
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
