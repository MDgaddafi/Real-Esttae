import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth"; // Custom hook for authentication
import useAxiosSecure from "../../../hooks/useAxiosSecure"; // Custom hook for secure API requests
import Swal from "sweetalert2";

const MyReviewsPage = () => {
  const { user } = useAuth(); // Logged-in user
  const axiosSecure = useAxiosSecure(); // Axios with authorization headers
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from the database
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosSecure.get(`/offers?email=${user.email}`);
        setReviews(res.data); // Assuming response contains an array of offers/reviews
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    
    fetchReviews();
  }, [user.email, axiosSecure]);

  // Handle review deletion
  const handleDelete = async (reviewId) => {
    try {
      const res = await axiosSecure.delete(`/offers/${reviewId}`);
      if (res.data.message === "Review deleted successfully") {
        // Update the reviews state by removing the deleted review
        setReviews(reviews.filter((review) => review._id !== reviewId));
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Your review has been deleted successfully!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not delete the review. Please try again.",
      });
    }
  };
  
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews found!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="border p-4 rounded-lg shadow-md space-y-2"
            >
              <h3 className="font-semibold text-lg">Property: {review.title}</h3>
              <p>
                <strong>Agent:</strong> {review.agent}
              </p>
              <p>
                <strong>Review Date:</strong>{" "}
                {new Date(review.reviewDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Review:</strong> {review.review}
              </p>
              <button
                onClick={() => handleDelete(review._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviewsPage;
