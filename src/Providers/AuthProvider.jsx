import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebas.init";


export const AuthContext = createContext(null) ;


const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()


const [user, setUser] = useState(null) ;
const [loading, setLoading] = useState(true) ;

// sign in with google popup 
const signInWithGoogle = () => {
  return  signInWithPopup(auth, googleProvider) ;
}

    // create user 
    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

// login user 
const signInUser = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass)
}

//sign out user
const signOutUser = () => {
    setLoading(true)
    return signOut(auth) ;
}

// check if user logged in or not 
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
                    console.log('user logged in', currentUser)
                    setUser(currentUser) 
                    setLoading(false)
    })

    return () => {
        unSubscribe()
    }
} , [])


const authInfo = {
    name: 'nodi nala khal bill' , 
    createUser ,
signInUser,
user ,
signOutUser ,
loading , 
signInWithGoogle
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;