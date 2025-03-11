import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function ListVideos({ videos }) {
  return (
    <div className="flex flex-wrap px-15">
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${ typeof video.id == "string" ?  video.id : video.id.videoId}`}>
            <VideoCard key={ typeof video.id == "string" ?  video.id : video.id.videoId} info={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default ListVideos;
