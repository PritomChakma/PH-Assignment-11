import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-volunteer`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const delayFn = setTimeout(() => {
      if (search) {
        handleSearch();
      } else {
        fetchAllPosts();
      }
    }, 500);

    return () => clearTimeout(delayFn);
  }, [search]);

  const fetchAllPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-volunteer`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching all posts:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-volunteer?title=${search}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };

  return (
    <div className="min-h-screen py-8 transition-colors duration-300">
      <div className="w-11/12 md:w-8/12 mx-auto mb-6 flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by Post Title"
          className="flex-grow px-4 py-2 border border-[#EF4C53] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4C53]   "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 px-4 py-2 bg-[#EF4C53] text-white rounded-md hover:bg-red-600 transition"
        >
          <FaSearch /> Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 mx-auto">
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
                  Category:
                  <span className="font-medium">{post.category}</span>
                </p>
                <p>
                  Location:
                  <span className="font-medium">{post.location}</span>
                </p>
                <p>
                  Deadline:
                  <span className="font-medium text-red-500 dark:text-red-400">
                    {new Date(post.deadLine).toLocaleDateString()}
                  </span>
                </p>
                <p>
                  Volunteers Needed:
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
    </div>
  );
};

export default AllVolunteer;
