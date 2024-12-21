import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //   login with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscreibe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscreibe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    updateUserProfile,
    loginUser,
    googleLogin,
    signOutUser,
    setUser,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
