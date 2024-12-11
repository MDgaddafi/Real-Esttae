import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const SignUp = ({ onClose, onSwitchToLogin }) => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook to redirect

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors

    try {
      // Create user
      const result = await createUser(email, password);
      console.log("User created:", result.user);

      // Update profile with name and photo URL
      await updateUserProfile(name, photoURL);
      console.log("Profile updated with name and photo:", name, photoURL);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Close popup and navigate to home page
      onClose();
      navigate("/"); // Redirect to the home page
    } catch (err) {
      console.error("Sign-up error:", err.message);
      setError(err.message);

      Swal.fire({
        icon: "error",
        title: "Sign-up Failed",
        text: err.message,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-[90%] max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-700 hover:text-red-600">
          &times;
        </button>

        {/* Register Form */}
        <h2 className="text-2xl font-bold mb-4 text-center">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo URL"
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-black text-white font-bold py-2 rounded-lg transition duration-300">
            Register
          </button>
        </form>

        {/* Switch to Login */}
        <div className="text-center mt-5">
          <p>
            Already have an account?{" "}
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={onSwitchToLogin}>
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
