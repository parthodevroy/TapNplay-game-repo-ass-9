import React, {useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../authentication/firebase-init";
import Authcontext from "./Authcontext";



const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Registration (with auto logout)
  const registation = async (email, password, name, photoURL) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Update user profile info (name, photo)
    await updateProfile(result.user, {
      displayName: name,
      photoURL: photoURL,
    });

    // ❗ Immediately sign out after registration
    await signOut(auth);

    return result;
  };

  // ✅ Login
  const loginuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Logout
  const logout = () => {
    return signOut(auth);
  };

  // ✅ Listen to user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    registation,
    loginuser,
    logout,
  };

  return (
    <Authcontext.Provider value={userInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
