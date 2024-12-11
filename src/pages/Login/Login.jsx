import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import SignUp from "../SignUp/SignUp";
import AuthContext from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    try {
      await signIn(email, password);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
      onClose(); // Close the modal after navigating
    } catch (err) {
      setError(err.message);
      Swal.fire("Login error");
    }
  };

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
      onClose();
    } catch (err) {
      Swal.fire("Login error");
    }
  };

  return (
    <>
      {showSignUp ? (
        <SignUp
          onClose={onClose}
          onSwitchToLogin={() => setShowSignUp(false)} // Switch back to Login
        />
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[90%] max-w-md">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-xl text-gray-700 hover:text-red-600"
            >
              &times;
            </button>

            {/* Login Form */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              Sign into your account
            </h2>
            <form onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="w-full bg-primary hover:bg-black text-white font-bold py-2 rounded-lg transition duration-300"
              >
                Login
              </button>
            </form>

            {/* Switch to Register */}
            <div className="text-center mt-5">
              <p>
                Not a member?{" "}
                <span
                  className="font-bold cursor-pointer hover:underline"
                  onClick={() => setShowSignUp(true)}
                >
                  Register here
                </span>
              </p>
              <FcGoogle
                onClick={handleGoogleSignIn}
                className="text-5xl mx-auto mt-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
