import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialize from '../firebase/firebase.init';

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

     // sign in using google provider
    const signInUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
    }

    // Obserbe user state change is the browser tab
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });

    }, []);

    // new user registration
    const newUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // already signedIn user
    const oldUser = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password)
    }

     // logOut function
     const logOut = () => {
         setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
     }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        newUser,
        oldUser,
        logOut,
    }
};

export default useFirebase;