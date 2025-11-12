import { AuthContext } from "./AuthContext";

//npm install -g firebase-tools

import { auth } from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const signInGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }
   const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
   }

    const authInfo={
        createUser,
        signInUser,
        signInGoogle,
        signOutUser,
        user,
        setUser,
        loading
    }
    return (
       <AuthContext value={authInfo}>
         {children}
       </AuthContext>
    );
};

export default AuthProvider;