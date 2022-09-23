import React, { useEffect, useState } from "react";
import {NavLink}  from "react-router-dom";
import Picture from "../components/Picture";

const url = "https://pixabay.com/api/?key=26032813-5eca57a90774446a771ac3a81";

const Home = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(json => setPics(json.hits))
  }, []);

  const handleLike = () => {
    console.log('Pic liked')
  }

  const handleExpand = () => {
    console.log('Pic expanded')
  }

  if (!pics) return null;

  return (
    <>
      <div className="navbar bg-base-100 p-12">
        <div className="navbar-start">
          <h1 className="font-bold text-xl">Home</h1>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
        </div>
        <div className="navbar-end">
          <NavLink className="btn btn-ghost btn-circle" to='/liked'>
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

      {/*<div className='container mx-auto px-4'>*/}
      {/*  <div className="grid grid-cols-12 gap-4">*/}
      {/*    <div className="col-span-4 bg-red-500">*/}
      {/*      1*/}
      {/*    </div>*/}
      {/*    <div className="col-span-3 bg-green-400">*/}
      {/*      2*/}
      {/*    </div>*/}
      {/*    <div className="col-span-5 bg-yellow-400">*/}
      {/*      3*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className='container mx-auto px-4'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pics.map(pic => {
            return <Picture key={pic.id} src={pic.largeImageURL} alt={pic.title} onLike={handleLike} onExpand={handleExpand} />
          })}
        </div>
      </div>
    </>
  );
};

export default Home;