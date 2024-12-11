import { Link, useLoaderData } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const PropertyDetails = () => {
  // Use the loader data
  const property = useLoaderData();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()

  const handleAddToCart = () =>{
    if(user && user.email){
      const cartItem = {
        menuId: property._id,
        email: user.email,
        title: property.title,
        location: property.location,
        priceRange: property.priceRange,
        image: property.image,
        agent: property.agent.name,
        agentimage: property.agent.image,
        verificationStatus: property.verificationStatus


      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: 'Successful added cart',
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }

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
          <p className="text-lg flex items-center gap-5">
            <strong><img className="w-16 border-s-gray-500 border-4 rounded-full" src={property.agent.image} alt="" /></strong> {property.agent.name}
          </p>
          <p className="text-lg">
            <strong>Price Range:</strong> {property.priceRange}
          </p>
          <p className="text-lg">
            <strong>Verify</strong> {property.verificationStatus || "No description provided."}
          </p>
          <button onClick={handleAddToCart} className="btn mt-10 bg-primary md:text-lg border-none rounded-full hover:bg-black/40 lg:text-lg text-white px-10 ">Add list <span><GoHeartFill /></span></button>
        </div>
      </div>
      <div className="text-center mt-8">
          <Link onClick={() => window.history.back()}><button className="w-36 max-sm:ml-28 transform transition duration-500 hover:scale-110 h-16 text-secondary font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-primary group-hover:bg-primary group-hover:duration-500 z-0"></span><span className="font-extra-bold z-10 relative"><span>Go</span> Back</span></button></Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
