import { useContext } from "react"; 
import LikedContext from "../LikedContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // 
  const {liked} = useContext(LikedContext)
  console.log(liked)
  return (
    <div className="navbar bg-base-100 p-12">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
      </div>
      <div className="navbar-end indicator">
        <span className="indicator-item badge badge-secondary font-bold">
          {liked.length}
        </span>
        <NavLink className="btn btn-ghost btn-circle" to="/liked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
