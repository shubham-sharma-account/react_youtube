import React, { useEffect, useState } from "react";
import { BASE_URL, GOOGLE_API_KEY } from "../utils/constants";
import ListVideos from "./ListVideos";

function Videocontainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`);
    const result = await data.json();
    setVideos(result.items);
  };

  return (
    <ListVideos videos={videos} />
  );
}

export default Videocontainer;
