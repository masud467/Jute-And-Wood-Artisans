import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              <NavLink to="/home">
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to="/allitems">
                <li>
                  <a>All Items </a>
                </li>
              </NavLink>
              <NavLink to="/additems">
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
            <NavLink to="/home">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/allitems">
              <li>
                <a>All Items </a>
              </li>
            </NavLink>
            <NavLink to="/additems">
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
          <Link to='/login'><button className="btn btn-accent btn-md text-xl font-medium ">LogIn</button></Link>
          <Link to='/register'><button className="btn btn-accent btn-md text-xl font-medium">Register</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
