import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const MyPost = () => {
  const { user } = useContext(AuthContex);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchMyPosts();
  }, [user]);

  const fetchMyPosts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/post/${user?.email}`
      );
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Failed to fetch posts.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/post/${id}`
      );

      toast.success("Post successfully deleted!");
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error(
        "Error deleting post:",
        error.response?.data || error.message
      );
      toast.error(error.message);
    }
  };

  const confirmDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <p>Are you sure you want to delete this post?</p>
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Delete
          </button>
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container px-4 mx-auto py-12">
      <div className="flex flex-col ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left">
                      Title
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left">
                      Location
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left">
                      Deadline
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left">
                      Edit/Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y ">
                  {posts.map((post) => (
                    <tr key={post._id} className="transition duration-200">
                      <td className="px-4 py-4 text-sm font-semibold text-gray-800">
                        {post.title}
                      </td>
                      <td className="px-4 py-4 text-sm">{post.location}</td>
                      <td className="px-4 py-4 text-sm">
                        {format(new Date(post.deadLine), "P")}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <div className="flex gap-x-4">
                          <Link
                            to={`/updateData/${post._id}`}
                            className="flex items-center gap-1 text-blue-500 transition duration-200"
                          >
                            <FaEdit className="w-4 h-4" />
                            Edit
                          </Link>

                          <button
                            onClick={() => confirmDelete(post._id)}
                            className="flex items-center gap-1 text-red-500 transition duration-200"
                          >
                            <FaTrashAlt className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
