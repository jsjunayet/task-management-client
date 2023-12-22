import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../public/firebase.config";

export const AuthControl = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const signUp = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider()
    const googlelogin = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }
    const update = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloading(false)
        })
        return () => {
            unsubsribe()
        }
    }, [])
    const info =
    {
        user,
        signUp,
        login,
        loading,
        update,
        logOut,
        googlelogin
    }
    return (
        <AuthControl.Provider value={info} >
            {children}
        </AuthControl.Provider>
    );
};

export default AuthProvider;