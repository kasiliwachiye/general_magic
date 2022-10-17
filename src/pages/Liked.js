import { useContext } from "react";
import LikedContext from "../LikedContext";
import { NavLink } from "react-router-dom";

// const url = "https://pixabay.com/api/?key=26032813-5eca57a90774446a771ac3a81";

const Liked = () => {
  const { liked } = useContext(LikedContext);

  return (
    <>
      <div className="navbar bg-base-100 p-12">
        <div className="navbar-start">
          <h1 className="font-bold text-xl">Liked Images</h1>
        </div>

        <div className="navbar-end">
          <NavLink className="btn btn-ghost btn-circle" to="/">
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </NavLink>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          {liked.map((pic) => {
            return <img key={pic.id} src={pic.src} alt={pic.previewURL} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Liked;
