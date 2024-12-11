import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  // Fetch mock data
  useEffect(() => {
    fetch("http://localhost:5001/properties") // Replace with your backend
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="p-8 w-[85%] mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">All Verified Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border p-4 rounded shadow">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-bold">{property.title}</h2>
            <p>{property.location}</p>
            <p>Agent: {property.agentName}</p>
            <p>Price: {property.priceRange}</p>
            <Link
              to={`/details/${property.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
