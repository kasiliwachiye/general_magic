import { createContext, useState } from "react";

const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [liked, setLiked] = useState([]);
  return (
    <LikedContext.Provider value={{ liked, setLiked }}>
      {children}
    </LikedContext.Provider>
  );
};

// step 2: export the context
export default LikedContext;
