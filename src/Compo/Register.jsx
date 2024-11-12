import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext) ;
    const navigate = useNavigate()

const handleRegister = e => {
    e.preventDefault() ;
    const name = e.target.name.value ;
    const email = e.target.email.value ;
    const pass = e.target.pass.value ;

    console.log(name, email, pass)

        // create user 
        createUser(email, pass)
        .then(res => {
            console.log(res.user)
            e.target.reset() ;
            navigate('/')
        })
        .catch(er => {
            console.log(er)
        })
}

    return (
        <div className="hero bg-base-200 pb-5">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p className="mt-2">Already have an account? Please <Link className="text-primary font-semibold" to='/login'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;