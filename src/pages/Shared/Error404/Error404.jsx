import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Error404 = () => {
  const [loading, setLoading] = useState(true);
  // Simple Loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:flex lg:w-[80%] md:w-[85%] w-[95%] gap-5 lg:h-[100vh] md:h-[80vh] h-[100vh] mx-auto items-center justify-evenly">
      <div>
        {loading ? (
          <div className="w-48 h-48 skeleton shrink-0 rounded-full mx-auto my-9"></div>
        ) : (
          <img className="w-[70%] md:w-[70%] lg:w-[100%] mx-auto my-9" src="https://i.ibb.co/Db8FWkL/light.png" alt="" />
        )}
      </div>
      <div className="space-y-5">

        <h1 className="text-9xl max-sm:text-center font-bold text-primary">404</h1>
        <p className="lg:text-2xl max-sm:text-center md:text-lg text-sm pb-5 font-bold">Oops! The page you are looking for does not exist.</p>
        <Link to="/"><button className="w-36 max-sm:ml-28 transform transition duration-500 hover:scale-110 h-16 text-secondary font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-primary group-hover:bg-primary group-hover:duration-500 z-0"></span><span className="font-extra-bold z-10 relative"><span className="text-white">Go</span> To Home</span></button></Link>
      </div>

    </div>
  );
};

export default Error404;