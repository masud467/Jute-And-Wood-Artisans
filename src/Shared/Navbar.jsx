import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import profile from "../assets/images/user.png"

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(()=>{})
  }


  return (
    <div className="">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to="/allitem">
                <li>
                  <a>All Items </a>
                </li>
              </NavLink>
              <NavLink to="/additem">
                <li>
                  <a>Add Items</a>
                </li>
              </NavLink>
              <NavLink to="/mycart">
                <li>
                  <a>My Cart</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <img className=" w-10" src="/src/assets/images/logo.png" alt="" />
          <a className="ml-3 text-xl font-bold">
            Jute And Wood{" "}
            <span className="text-green-500">
              <br />
              Artisans
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/allitem">
              <li>
                <a>All Items </a>
              </li>
            </NavLink>
            <NavLink to="/additem">
              <li>
                <a>Add Items</a>
              </li>
            </NavLink>
            <NavLink to="/mycart">
              <li>
                <a>My Cart</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user?
            <div className="flex items-center">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  <img src={user?.photoURL|| profile}/>
             </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-ghost btn-sm">{user?.displayName|| ""}</button>
              </li>
              <li>
                <button className="btn btn-ghost btn-sm">{user.email}</button>
              </li>
            </ul>
            </div>
            <Link><button onClick={handleLogOut} className="btn btn-accent btn-md text-xl font-medium">LogOut</button></Link>
          </div>
             
            :
            <>
            <Link to='/login'><button className="btn btn-accent btn-md text-xl font-medium ">LogIn</button></Link>
          <Link to='/register'><button className="btn btn-accent btn-md text-xl font-medium">Register</button></Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
