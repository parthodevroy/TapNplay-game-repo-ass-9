// inside UpdatedProfile.js
import { useState, useContext, useEffect } from "react";
import Authcontext from "../../contextprovider/Authcontext";
import { useNavigate } from "react-router";

const UpdatedProfile = () => {
  const { user, update, setUser } = useContext(Authcontext); // add setUser
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate=useNavigate()

  // Update Navber instantly as user types
  useEffect(() => {
    if (user) {
      setUser({
        ...user,
        displayName: name,
        photoURL: photoURL,
      });
    }
  }, [name, photoURL]);

  const handleUpdate = (e) => {
    update({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => alert("Profile updated successfully!"))
      e.target.reset()

      .catch((err) => alert(err.message));
  };
  if (!user) {
    navigate("/login")

    
  }

  return (
    <div className="text-center text-white mt-10">
      <h2 className="text-2xl mb-4">Update Your Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 rounded mb-2 block mx-auto"
      />
      <input
        type="text"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        placeholder="Photo URL"
        className="border p-2 rounded mb-2 block mx-auto"
      />
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default UpdatedProfile;
