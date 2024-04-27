import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true)

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

const userInfo = {createUser,loading,signInUser,logInWithGoogle,logInWithGithub}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;