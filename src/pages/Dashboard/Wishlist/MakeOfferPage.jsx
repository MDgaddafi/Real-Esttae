import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeOfferPage = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [offerAmount, setOfferAmount] = useState("");
  const [date, setDate] = useState("");
  const [parsedRange, setParsedRange] = useState([0, 0]); // Store min and max price as numbers

  // Fetch property details
  useEffect(() => {
    const fetchProperty = async () => {
      const res = await axiosSecure.get(`/carts/${id}`);
      const data = res.data;

      // Parse priceRange string into numbers
      const range = data.priceRange
        .replace(/[$,]/g, "") // Remove "$" and ","
        .split(" - ")
        .map(Number); // Convert to numbers

      setProperty(data);
      setParsedRange(range);
    };
    fetchProperty();
  }, [id, axiosSecure]);

  // Handle form submission
  const handleOffer = async (e) => {
    e.preventDefault();

    // Check if the offer is within the price range
    if (offerAmount < parsedRange[0] || offerAmount > parsedRange[1]) {
      Swal.fire({
        icon: "error",
        title: "Invalid Offer",
        text: `Your offer must be between $${parsedRange[0].toLocaleString()} and $${parsedRange[1].toLocaleString()}`,
      });
      return;
    }

    const offerData = {
      propertyId: property._id,
      title: property.title,
      location: property.location,
      agent: property.agent,
      buyerName: user.displayName,
      buyerEmail: user.email,
      offeredAmount: offerAmount,
      buyingDate: date,
      status: "pending",
    };

    try {
      const response = await axiosSecure.post("/offers", offerData);
      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Offer Submitted",
          text: "Your offer has been successfully submitted!",
        });
        navigate("/dashboard/bought-properties"); // Redirect back to the wishlist page
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not submit the offer. Please try again.",
      });
    }
  };

  if (!property) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Make an Offer</h2>
      <form
        onSubmit={handleOffer}
        className="space-y-4 border p-6 rounded-lg shadow-lg"
      >
        <div>
          <label>Property Title</label>
          <input
            type="text"
            value={property.title}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Property Location</label>
          <input
            type="text"
            value={property.location}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Agent Name</label>
          <input
            type="text"
            value={property.agent}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Offered Amount</label>
          <input
            type="number"
            value={offerAmount}
            onChange={(e) => setOfferAmount(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder={`Enter amount between $${parsedRange[0].toLocaleString()} - $${parsedRange[1].toLocaleString()}`}
          />
        </div>

        <div>
          <label>Buying Date</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default MakeOfferPage;
