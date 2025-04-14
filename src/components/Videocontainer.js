import React, { useContext, useEffect } from "react";
import { BASE_URL, GOOGLE_API_KEY } from "../utils/constants";
import ListVideos from "./ListVideos";
import { VideoContext, VideoProvider } from "../utils/appContext/VideoContext";

function Videocontainer() {
  // const [videos, setVideos] = useState([]);
  const { videos, setVideos } = useContext(VideoContext);
  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(
        `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`
      );
      const result = await data.json();
      setVideos(result.items);
    };
    getVideos();
  }, [setVideos]);

  return (
    // <VideoProvider>
    <ListVideos videos={videos} />
    // </VideoProvider>
  );
}

export default Videocontainer;
