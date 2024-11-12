import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext) ;
const navigate = useNavigate()

    const handleLogin = e => {
    e.preventDefault() ;
    const email = e.target.email.value ;
    const pass = e.target.pass.value ;

    console.log(pass, email)

    // login user 
signInUser(email,pass)
.then(res => {
    console.log(res.user)
    e.target.reset() ;
    navigate('/order')
})
.catch( er => console.log(er))

}


const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then(res=> {
        console.log(res.user);
        navigate('/profile');
    })
    .catch(er=> console.log(er))
}

    return (
        <div className="hero bg-base-200 pb-5">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="mt-2">New here? Please <Link className="text-primary font-semibold" to='/register'>Register</Link></p>
              </div>
            </form>
            <button onClick={handleSignInWithGoogle} className="btn btn-wide mx-auto">Sign in With Google</button>
          </div>
        </div>
      </div>
    );
};

export default Login;