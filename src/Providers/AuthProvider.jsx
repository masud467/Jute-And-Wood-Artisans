import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const auth = getAuth(app);
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle = ()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    const logInWithGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return() =>{
            unSubscribe
        }
    },[])

// eslint-disable-next-line no-dupe-keys
const userInfo = {createUser,loading,signInUser,logInWithGoogle,logInWithGithub,user,loading,logOut}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}