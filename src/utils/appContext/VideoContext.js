import { createContext, useState } from "react";

//accessed by useContext
export const VideoContext = createContext({});  

//wrapped around the components that need to access the context
export const VideoProvider = ({ children }) => {  
  const [videos, setVideos] = useState([]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
