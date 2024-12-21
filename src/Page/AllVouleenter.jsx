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

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteer-posts?title=${search}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="w-11/12 md:w-8/12 mx-auto mb-6 flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by Post Title"
          className="flex-grow px-4 py-2 border border-[#EF4C53] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4C53]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 px-4 py-2 bg-[#EF4C53] text-white rounded-md"
        >
          <FaSearch /> Search
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 mx-auto">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white p-4 rounded-md shadow-md border hover:shadow-lg"
          >
            {post.photo && (
              <img
                src={post.photo}
                alt={post.title}
                className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="">Category: {post.category}</p>
            <p className="">Location: {post.location}</p>
            <p className="">
              Deadline: {new Date(post.deadLine).toLocaleDateString()}
            </p>

            <button
              onClick={() => navigate(`/volunteer-post-details/${post._id}`)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No posts found.</p>
      )}
    </div>
  );
};

export default AllVolunteer;
