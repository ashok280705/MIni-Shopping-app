import React, { useState ,useRef} from "react";
import UserContext from "./context";
const contextProvider = ({ children }) => {
    const [Username, setUsername] = useState([])
    return (
    <UserContext.Provider
      value={{
        Username, setUsername
      }}
    >
      {children}
    </UserContext.Provider>
);
};
export default contextProvider;