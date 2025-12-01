// import React, { useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   signInWithEmailAndPassword,
//   updateProfile,
//   GoogleAuthProvider,
//   signInWithPopup,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { auth } from "../authentication/firebase-init";
// import Authcontext from "./Authcontext";

// const Authprovider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const provider = new GoogleAuthProvider();

//   // ✅ Registration (with auto logout)
//   const registation = async (email, password, name, photoURL) => {
//     const result = await createUserWithEmailAndPassword(auth, email, password);

//     await updateProfile(result.user, {
//       displayName: name,
//       photoURL: photoURL,
//     });

//     await signOut(auth);

//     return result;
//   };

//   // ✅ Login
//   const loginuser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Logout
//   const logout = () => {
//     return signOut(auth);
//   };

//   // ✅ Password reset email
//   const resetemail = (email) => {
//     return sendPasswordResetEmail(auth, email);
//   };

//   // ✅ Google login
//   const googlelogin = () => {
//     return signInWithPopup(auth, provider);
//   };

//   // ✅ Update profile and immediately reflect in context
//   const update = async (profile) => {
//     if (!auth.currentUser) return Promise.reject("No user logged in");

//     await updateProfile(auth.currentUser, profile);
//     await auth.currentUser.reload(); // reload user from Firebase
//     setUser(auth.currentUser);       // update state immediately
//   };

//   // ✅ Listen to user state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const userInfo = {
//     user,
//     registation,
//     loginuser,
//     logout,
//     googlelogin,
//     resetemail,
//     update,
//     setUser
//   };

//   return <Authcontext.Provider value={userInfo}>{children}</Authcontext.Provider>;
// };

// export default Authprovider;
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../authentication/firebase-init";
import Authcontext from "./Authcontext";
import Loading from "../authentication/Loading";
// import Loading from "../components/Loading"; // spinner import

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //new loading state
  const provider = new GoogleAuthProvider();

  //  Registration
  const registation = async (email, password, name, photoURL) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, {
      displayName: name,
      photoURL: photoURL,
    });
    await signOut(auth);
    setLoading(false);
    return result;
  };

  // Authprovider.js এর মধ্যে
// const registation = async (email, password, name, photoURL) => {
//     // setLoading(true);
//     try {
//         const result = await createUserWithEmailAndPassword(auth, email, password);
        
//         await updateProfile(result.user, {
//             displayName: name,
//             photoURL: photoURL,
//         });
        
//         // সব সফল
//         // setLoading(false);
//         return result; 
//     } catch (error) {
//         // error ঘটলে সেটিকে ক্যাচ করে পাঠানো 
//         setLoading(false) // <--- নিশ্চিত করুন লোডিং শেষ হয়
//         throw error; // <--- error টিকে রিটার্ন করুন যাতে Register.jsx এ ধরা যায়
//     }
// };
  //  Login
  const loginuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Password reset
  const resetemail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //  Google login
  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Update profile 
  const update = async (profile) => {
    if (!auth.currentUser) return Promise.reject("No user logged in");
    setLoading(true);
    await updateProfile(auth.currentUser, profile);
    await auth.currentUser.reload();
    setUser(auth.currentUser);
    setLoading(false);
  };

  //  user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    registation,
    loginuser,
    logout,
    googlelogin,
    resetemail,
    update,
    loading,
    setUser,
    setLoading
  };

  // spiner
  if (loading) {
    return <Loading/>;
  }

  return (
    <Authcontext.Provider value={userInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;

