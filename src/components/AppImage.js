import { useState } from "react";

const AppImage = ({ alt, src, onExpand }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const divClasses = `container relative `;

  return (
    <>
      <div
        className={hover ? divClasses : ""}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={src} alt={alt} className="w-full h-auto" />
        {hover ? (
          <button className="absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={onExpand}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </button>
        ) : null}
      </div>
    </>
  );
};

export default AppImage;
