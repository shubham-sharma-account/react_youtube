import React, { useEffect, useState } from "react";
import { BASE_URL, GOOGLE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap px-15">
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default Videocontainer;
