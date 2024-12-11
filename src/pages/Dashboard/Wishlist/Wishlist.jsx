import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { TiLocation } from "react-icons/ti";


const Wishlist = () => {
  const [cart, refetch] = useCart(); // Fetch wishlist data
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); // Get logged-in user info

  // Function to delete a property by ID
  const handleRemove = async (id) => {
    try {
      // Make a DELETE request to the server
      const response = await axiosSecure.delete(`/carts/${id}?email=${user.email}`);

      if (response.data.deletedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Property deleted successfully",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      } else {
        console.error("Failed to delete the property");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to delete the property",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Wishlist {cart.length}</h2>

      {cart.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart
            .slice() // Create a shallow copy to prevent mutation
            .reverse() // Reverse the array order
            .map((property) => (
            <div
              key={property._id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
            >
              {/* Property Image */}
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />

              {/* Price Range */}
              <p className="text-lg font-bold">
                Price Range: <span className="text-sm">{property.priceRange}</span>
              </p>

              {/* Property Details */}
              <h3 className="text-xl font-semibold mt-2 mb-6">{property.title}</h3>
              <p className="text-gray-600 flex gap-2 items-center mb-2">
              <span className="text-2xl text-red-500"><TiLocation /></span> {property.location}
              </p>

              {/* Agent Details */}
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={property.agentimage}
                  alt={property.agent}
                  className="w-10 h-10 rounded-full"
                />
                <div className="mb-4">
                  <p className="text-sm font-medium">{property.agent}</p>
                  <p
                    className={`text-xs ${
                      property.verificationStatus ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {property.verificationStatus ? "Verified Agent" : "Not Verified"}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Make an Offer
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => handleRemove(property._id)} // Call delete function
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
