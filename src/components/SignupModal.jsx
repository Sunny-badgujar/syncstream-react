import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignupModal = ({ onClose }) => {
  const navigate = useNavigate();
  const { login } = useAuth(); // fake login on signup

  const handleSignup = (e) => {
    e.preventDefault();
    login({ name: "Sunny" }); // fake user data
    onClose();
    navigate("/dashboard");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" required />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" required />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
