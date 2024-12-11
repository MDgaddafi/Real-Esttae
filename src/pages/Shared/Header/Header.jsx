import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import logo from "/logo.png";
import { useContext, useState } from "react";
import Login from "../../Login/Login";
import AuthContext from "../../../Provider/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
      navigate("/", { replace: true }); // Redirect to home page after logout
    } catch (err) {
      console.error("Logout failed", err.message);
    }
  };

  const header = (
    <>
      {user ? (
        <>
          <li>
            <Link to="/all-properties">All Properties</Link>
          </li>
          <li>
            <Link to="/all">All</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </>
      )}
    </>
  );
  

  return (
    <div className="navbar sticky top-0 z-50 border border-white shadow-md lg:w-[80%] md:w-[90%] w-[95%] mx-auto bg-accent rounded-xl text-base-content lg:p-5 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {header}
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            className="lg:w-1/4 md:w-1/3 w-1/2 hover:cursor-pointer transform transition duration-500 hover:scale-110"
            alt="Real Estate"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{header}</ul>
      </div>

      <div className="navbar-end">
        {/* Conditional Rendering for Login or Profile */}
        {user ? (
          <div className="flex items-center gap-4">
            {/* User Profile Image */}
            <img
              src={user.photoURL || "No Images"}
              alt="Profile"
              className="w-14 h-14 cursor-pointer max-sm:w-10 max-sm:h-10 rounded-full border border-gray-300"
            />

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 max-sm:py-1 max-sm:px-2 max-sm:mr-2 rounded transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="w-36 transform transition duration-500 hover:scale-110 h-16 text-secondary font-black rounded-full hover:text-white duration-300 relative group"
          >
            <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-primary group-hover:bg-primary group-hover:duration-500 z-0"></span>
            <span className="font-extra-bold z-10 relative">Login</span>
          </button>
        )}
      </div>

      {/* Login Modal */}
      {isOpen && <Login onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Header;
