import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebas.init";


export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null) ;

    // create user 
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

// login user 
const signInUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass)
}

//sign out user
const signOutUser = () => {
    return signOut(auth) ;
}

// check if user logged in or not 
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
                    console.log('user logged in', currentUser)
                    setUser(currentUser)  
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
signOutUser 
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;