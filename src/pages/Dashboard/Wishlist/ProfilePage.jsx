
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Provider/AuthContext"; // Assuming you're using context for user auth state
import Swal from "sweetalert2"; // Optional, for showing alerts
import { app } from "../../../firebase/firebase.config"; // Assuming Firebase config is here
import { getAuth } from "firebase/auth"; // For Firebase authentication

const ProfilePage = () => {
  const { user, loading } = useContext(AuthContext); // Access user and loading state
  const [userData, setUserData] = useState(null); // User info from the server

  const auth = getAuth(app);

  // Fetch user data when user is logged in
  useEffect(() => {
    if (user?.email) {
      // Fetch user data from your database (e.g., Firestore, or your custom API)
      fetch(`http://localhost:5001/user/properties/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to load user data.",
          });
        });
    }
  }, [user?.email]);

  // Return loading state while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
      {userData ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <div className="flex items-center space-x-4 mb-6">
            {/* User Image */}
            <img
              src={userData.photoURL || "https://via.placeholder.com/150"} // Default image if no user image
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
            {/* User Info */}
            <div>
              <p className="text-lg font-semibold">{userData.displayName}</p>
              <p className="text-gray-500">{userData.email}</p>

              {/* Show Role if not a regular user */}
              {userData.role && userData.role !== "regular" && (
                <p className="text-blue-500">Role: {userData.role}</p>
              )}
            </div>
          </div>

          {/* Optional: Add other relevant information */}
          <div>
            <p className="text-lg font-semibold">Additional Info</p>
            <p>{userData.about || "No additional information available."}</p>
          </div>
        </>
      ) : (
        <p>No user data found!</p>
      )}
    </div>
  );
};

export default ProfilePage;
