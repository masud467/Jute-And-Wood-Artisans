import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";


import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    if(password.length <6){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "password must be have at least 6 characters",
            
          });
          return
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "password must be have  an Uppercase letter",
            
          });
          return
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "password must be have  an Lowercase letter",
            
          });
          return
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
            icon: "success",
            title: "Good job!",
            text: "Register successfully",
            
          });
        const user = { email };
        fetch("http://localhost:6001/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This email is already use",
            
          });
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
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
                <button className="btn btn-primary">Register</button>
                <p>
                  Already have an account?
                  <Link className="underline text-blue-600" to="/login">
                    LogIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
