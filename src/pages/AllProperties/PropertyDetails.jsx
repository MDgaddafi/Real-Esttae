import { useLoaderData } from "react-router-dom";

const PropertyDetails = () => {
  // Use the loader data
  const property = useLoaderData();

  return (
    <div className="p-8 w-[85%] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Location:</strong> {property.location}
          </p>
          <p className="text-lg">
            <strong>Agent Name:</strong> {property.agentName}
          </p>
          <p className="text-lg">
            <strong>Price Range:</strong> {property.priceRange}
          </p>
          <p className="text-lg">
            <strong>Description:</strong> {property.description || "No description provided."}
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
