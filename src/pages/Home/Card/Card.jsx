import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [properties, setProperties] = useState([]);

  // Fetch mock data
  useEffect(() => {
    fetch("http://localhost:5001/properties") // Replace with your backend
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3, // Default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and above
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <SectionTitle
        heading={"Homes For You"}
        subHeading={"Based on your view history"}
      ></SectionTitle>
      <div className="w-[100%] mt-10 mx-auto mb-10">
        <Slider className="mx-auto" {...settings}>
          {/* Map over the first 6 properties to show individual slides */}
          {properties.slice(0, 6).map((property) => (
            <div key={property.id} className="p-4">
              <div className="border p-4 rounded shadow">
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
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center">
      <Link to="/all-properties"><button className="w-36 max-sm:ml-28 transform transition duration-500 hover:scale-110 h-16 text-secondary font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-primary group-hover:bg-primary group-hover:duration-500 z-0"></span><span className="font-extra-bold z-10 relative"><span>View</span> All</span></button></Link>
      </div>
    </div>
  );
};

export default Card;
