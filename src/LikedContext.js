import { createContext, useState } from "react";

// step 1: create the context
const LikedContext = createContext();

// step 3: create and export a provider within which child components will have access to the provided value
export const LikedProvider = ({ children }) => {
  // step 6: add the liked state
  const [liked, setLiked] = useState([]);
  const addLike = (src) => {
    // add to previous state
    setLiked((prevState) => [...prevState, { src }]);
  };
  return (
    <LikedContext.Provider value={{ liked, addLike }}>{children}</LikedContext.Provider>
  );
};

// step 2: export the context
export default LikedContext;
