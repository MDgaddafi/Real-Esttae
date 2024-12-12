import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../Provider/AuthContext";
import Swal from "sweetalert2"; // For showing alerts

const BoughtProperties = () => {
  const { user, loading } = useContext(AuthContext); // Access user and loading state
  const [properties, setProperties] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0); // Store rating (e.g., 1 to 5)
  const [reviewedProperties, setReviewedProperties] = useState([]); // Track reviewed properties

  // Fetch properties that the user has offered for
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5001/user/properties/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProperties(data);
          // Filter reviewed properties based on status 'bought'
          const reviewed = data.filter((property) => property.status === "bought" && property.reviewed);
          setReviewedProperties(reviewed);
        });
    }
  }, [user?.email]);

  // Function to handle review submission
  const handleReviewSubmit = async (propertyId) => {
    if (!reviewText || rating === 0) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Review",
        text: "Please provide both a review and a rating.",
      });
      return;
    }

    const reviewData = {
      propertyId,
      buyerEmail: user.email,
      reviewText,
      rating,
    };

    try {
      const response = await fetch("http://localhost:5001/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Review Submitted",
          text: "Your review has been successfully submitted.",
        });

        // Update the local state after successful review submission
        // Add the full property object to reviewedProperties
        const updatedProperty = properties.find(property => property._id === propertyId);
        setReviewedProperties((prevReviewed) => [
          ...prevReviewed,
          updatedProperty,
        ]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to submit review. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit review. Please try again.",
      });
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Properties You Have Offered For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {properties.length > 0 ? (
              properties.map((property) => (
                <div
                  key={property._id}
                  className="border rounded-lg p-4 shadow-lg flex flex-col"
                >
                  <h3 className="text-lg font-bold">{property.title}</h3>
                  <p>Location: {property.location}</p>
                  <p>Agent: {property.agent}</p>
                  <p>Offered Amount: ${property.offeredAmount}</p>
                  <p>Status: {property.status}</p>

                  {/* Review Button */}
                  {property.status === "bought" && !reviewedProperties.some(p => p._id === property._id) && (
                    <div className="mt-4">
                      <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Write your review here"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      />
                      <div className="flex items-center mt-2">
                        <label className="mr-2">Rating: </label>
                        <select
                          className="p-2 border rounded"
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        >
                          <option value="0">Select Rating</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <button
                        onClick={() => handleReviewSubmit(property._id)}
                        className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
                      >
                        Submit Review
                      </button>
                    </div>
                  )}

                  {property.status === "bought" && reviewedProperties.some(p => p._id === property._id) && (
                    <p className="text-green-500">You have already reviewed this property.</p>
                  )}
                </div>
              ))
            ) : (
              <p>No properties found!</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BoughtProperties;
