import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

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
      <div className="-mt-48 mb-10">
        <SectionTitle heading={"All properties "}></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="border p-4 rounded shadow">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-bold">{property.title}</h2>
            <p>{property.location}</p>
            <p>Agent: {property.agentName}</p>
            <p>Price: {property.priceRange}</p>
            <Link to={`/details/${property._id}`}><button className="w-36 max-sm:ml-28 transform transition duration-500 hover:scale-110 h-16 text-secondary font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-primary group-hover:bg-primary group-hover:duration-500 z-0"></span><span className="font-extra-bold z-10 relative"><span>View</span> Details</span></button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
