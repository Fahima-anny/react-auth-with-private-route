import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

if(loading){
    return <span className="loading loading-bars loading-lg mt-20"></span>
}

if(user) {
    return (
        <>
        {children}
        </>
    )
}

    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;