import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  signInWithPopup(auth, provider).catch((error) =>
    console.error("Error signing in: ", error)
  );
};

export const signOutUser = () => {
  signOut(auth).catch((error) => console.error("Error signing out: ", error));
};
