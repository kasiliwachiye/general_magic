import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LikedContext from "../LikedContext";

const url = "https://pixabay.com/api/?key=26032813-5eca57a90774446a771ac3a81";

const Home = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const { liked, setLiked } = useContext(LikedContext);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (json) => {
          const data = json.hits;
          setItems(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  const addLike = (item) => {
    if (liked.includes(item)) return;
    setLiked([...liked, item]);
  };

  return (
    <>
      <div className="navbar bg-base-100 p-10">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by tag, eg. 'animal'"
              className="input input-bordered input-sm w-96 max-w-xs"
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

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            {items
              .filter((item) =>
                item.tags.toLowerCase().includes(query.toLowerCase())
              )
              .filter(
                (item) => item.imageWidth > 4500 && item.imageHeight <= 4000
              )
              .map((item) => {
                return (
                  <img
                    className="my-4"
                    key={item.id}
                    src={item.largeImageURL}
                    alt={item.title}
                    onClick={() => addLike(item)}
                  />
                );
              })}
          </div>
          <div className="col-span-3">
            {items
              .filter((item) =>
                item.tags.toLowerCase().includes(query.toLowerCase())
              )
              .filter(
                (item) => item.imageWidth < 4500 && item.imageHeight > 5000
              )
              .map((item) => {
                return (
                  <img
                    className="my-4"
                    key={item.id}
                    src={item.largeImageURL}
                    alt={item.title}
                    onClick={() => addLike(item)}
                  />
                );
              })}
          </div>
          <div className="col-span-5">
            {items
              .filter((item) =>
                item.tags.toLowerCase().includes(query.toLowerCase())
              )
              .filter(
                (item) => item.imageWidth > 6000 && item.imageHeight > 4000
              )
              .map((item) => {
                return (
                  <img
                    className="my-4"
                    key={item.id}
                    src={item.largeImageURL}
                    alt={item.title}
                    onClick={() => addLike(item)}
                  />
                );
              })}
            <div className="grid grid-cols-2 gap-4">
              {items
                .filter((item) =>
                  item.tags.toLowerCase().includes(query.toLowerCase())
                )
                .filter(
                  (item) => item.imageWidth < 4500 && item.imageHeight < 4000
                )
                .map((item) => {
                  return (
                    <img
                      className="my-4"
                      key={item.id}
                      src={item.largeImageURL}
                      alt={item.title}
                      onClick={() => addLike(item)}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
