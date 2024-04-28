import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signInUser, logInWithGoogle,logInWithGithub } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
const from = location?.state || '/'
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from)
        Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Login successfully",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password. Please try again.",
        });
      });
  };

  const handleGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from)
      })
      .catch((error) => {
        console.error(error);
        
      });
  };

  const handleGithub = ()=>{
    logInWithGithub()
    .then((result) => {
      console.log(result.user);
      navigate(from)
    })
    .catch((error) => {
      console.error(error);
      
    });
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-3">
              Do not have an account?
              <Link className="underline text-blue-600" to="/register">
                Register
              </Link>
            </p>
            <div className="flex justify-around mb-5">
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-primary"
              >
                Google
              </button>
              <button
                onClick={handleGithub}
                className="btn btn-outline btn-primary"
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
