import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VoulenteerDetails = () => {
  const { id } = useParams();
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

  if (!post._id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="w-11/12 md:w-8/12 mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h1>
        {post.photo && (
          <img
            src={post.photo}
            alt={post.title}
            className="w-full h-56 object-cover rounded-md mb-4"
          />
        )}
        <p className="mb-2">
          <strong>Category:</strong> {post.category}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {post.location}
        </p>
        <p className="mb-2">
          <strong>Deadline:</strong>{" "}
          {new Date(post.deadLine).toLocaleDateString()}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default VoulenteerDetails;
