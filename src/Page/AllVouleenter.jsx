import axios from "axios";
import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const AllVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
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
      <div className="mb-6 flex flex-wrap items-center justify-between w-11/12 md:w-8/12 mx-auto">
        <div className="flex-grow flex items-center gap-1">
          <input
            type="text"
            placeholder="Search by Post Title"
            className="flex-grow px-4 py-2 border border-[#EF4C53] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4C53] transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 px-4 py-2 bg-[#EF4C53] text-white rounded-md hover:bg-red-600 transition"
          >
            <FaSearch />
            <span className="hidden md:inline">Search</span>
          </button>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0 justify-end md:justify-start">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg ${
              viewMode === "grid" ? "bg-gray-200" : ""
            }`}
          >
            <CgMenuGridO className="text-xl md:text-3xl text-blue-500" />
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`p-2 rounded-lg ${
              viewMode === "table" ? "bg-gray-200" : ""
            }`}
          >
            <GiHamburgerMenu className="text-xl md:text-3xl text-blue-500" />
          </button>
        </div>
      </div>

      {viewMode === "grid" && (
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
              <div className="p-3 rounded-md shadow-sm">
                <h3 className="text-md font-semibold mb-1">{post.title}</h3>
                <div className="text-xs mb-3">
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {post.category}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {post.location}
                  </p>
                  <p>
                    <span className="font-semibold">Deadline:</span>{" "}
                    <span className="font-medium text-red-500 dark:text-red-400">
                      {new Date(post.deadLine).toLocaleDateString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Volunteers Needed:</span>{" "}
                    <span className="font-medium text-blue-500 dark:text-blue-400">
                      {post.noofvolunteer}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/VoulenteerDetails/${post._id}`)}
                  className="w-full btn text-white hover:bg-[#2c3e50] bg-[#d8434a] transition-all duration-150 py-1 text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === "table" && (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border md:rounded-lg">
              <table className="min-w-full divide-y table-auto">
                <thead className="bg-[#EF4C53] text-white">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Title
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Category
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Location
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Deadline
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Volunteers Needed
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {posts.map((post) => (
                    <tr key={post._id}>
                      <td className="px-4 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          {post.photo && (
                            <img
                              src={post.photo}
                              alt={post.title}
                              className="w-10 h-10 object-cover rounded"
                            />
                          )}
                          <span className="font-medium">{post.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{post.category}</td>
                      <td className="px-4 py-4 text-sm">{post.location}</td>
                      <td className="px-4 py-4 text-sm ">
                        {new Date(post.deadLine).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-sm ">
                        {post.noofvolunteer}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button
                          onClick={() =>
                            navigate(`/VoulenteerDetails/${post._id}`)
                          }
                          className="text-red-500"
                        >
                          See more
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVolunteer;