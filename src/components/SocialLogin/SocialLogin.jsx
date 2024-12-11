import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
          console.log(res.data);
          navigate('/');
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn text-red-500">
        <FaGoogle />
        Sign Up With Google
      </button>
    </div>
  );
};

export default SocialLogin;
