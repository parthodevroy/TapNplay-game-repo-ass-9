// UpdatedProfile.jsx
import { useState, useContext, useEffect } from "react";
import Authcontext from "../../contextprovider/Authcontext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatedProfile = () => {
  const { user, update, setUser } = useContext(Authcontext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // initially false

  // ✅ Update Navber instantly as user types
  useEffect(() => {
    if (user) {
      setUser({
        ...user,
        displayName: name,
        photoURL: photoURL,
      });
    }
  }, [name, photoURL]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      await update({
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("✅ Profile updated successfully!");
    } catch (err) {
      toast.error("❌ " + err.message);
    } finally {
      setLoading(false); // stop loading
    }
  };

  // If no user, redirect to login
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="text-center text-white mt-10">
      <h2 className="text-2xl mb-4 font-semibold text-yellow-400">
        Update Your Profile
      </h2>

      <form onSubmit={handleUpdate} className="space-y-3 text-white max-w-sm mx-auto">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="border p-2 rounded w-full text-white"
        />
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
          className="border p-2 rounded w-full text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded font-semibold text-white ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>

      {loading && (
        <div className="flex justify-center mt-4">
          <span className="loading loading-spinner text-success"></span>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default UpdatedProfile;
