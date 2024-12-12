import { NavLink, Outlet } from "react-router-dom";
import { GoHeartFill, GoHome, GoPackage, GoStarFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";



const Dashboard = () => {
  return (
    <div className="flex w-[80%] mx-auto">
      <div className="w-64 min-h-screen bg-gray-100 text-black">
        <ul className="menu p-8">
          <li ><NavLink to='/dashboard/profile'><CgProfile /> My Profile</NavLink></li>
          <li><NavLink to='/dashboard/wishlist'><GoHeartFill /> Wish List</NavLink></li>
          <li><NavLink to='/dashboard/bought-properties'><BsCashCoin /> Property Bough</NavLink></li>
          <li><NavLink to='/dashboard/reviews'><GoStarFill /> My Reviews</NavLink></li>
        </ul>
        <div className="divider"></div>
        <ul className="menu p-8">
          <li ><NavLink to='/'><GoHome />Back To Home</NavLink></li>
          <li ><NavLink to='/all-properties'><GoPackage />All Properties</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 m-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;