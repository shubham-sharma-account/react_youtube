import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { BASE_URL, GOOGLE_API_KEY } from "../utils/constants";
import { formatViews, timeAgo } from "../utils/common";
import VideoComment from "./VideoComment";

function WatchVideo() {
  const dispatch = useDispatch();
  const [query] = useSearchParams();
  const videoId = query.get("v");
  const [videoDetails, setVideoDetails] = useState(null);
  const [showDescription, setShowDescription] = useState(0);

  const getVideoDetils = useCallback(async () => {
    const result = await fetch(
      `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const data = await result.json();
    setVideoDetails(data);
  }, [videoId]);

  videoDetails && console.log("videoDetails >> ", videoDetails);

  useEffect(() => {
    getVideoDetils();
  }, [getVideoDetils]);

  useEffect(() => {
    dispatch(closeMenu());
  });

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="w-full">
      <div className="p-4 flex">
        <div>
          <iframe
            className="rounded-xl"
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-6 bg-green-300 rounded-lg w-2/6 h-auto">
          Video suggestions
        </div>
      </div>
      {/* video details section */}
      {!videoDetails ? (
        "...Loading"
      ) : (
        <div className=" w-4/6 mx-4">
          {/* video title */}
          <h2 className="text-xl font-bold">
            {videoDetails.items[0].snippet.title}
          </h2>
          {/* video actions */}
          <div className="flex justify-between py-3">
            <div className="flex">
              <div>
                <img alt="channel-img"
                  src={videoDetails.items[0].snippet.thumbnails.medium.url}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="text-xl font-bold mx-2 py-2">
                {videoDetails.items[0].snippet.channelTitle}
              </div>
              <div className="bg-black text-white w-36 text-lg font-bold rounded-3xl p-2 text-center">
                <button>Subscribe</button>
              </div>
            </div>
            <div className="flex justify-evenly font-bold">
              <div className="bg-gray-200 py-3 px-2 mx-2 rounded-3xl w-36">
                👍 Likes | 😒
              </div>
              <div className="bg-gray-200 py-3 px-2 mx-2 rounded-3xl w-24">
                ⬆️ Share
              </div>
              <div className="bg-gray-200 py-3 px-2 mx-2 rounded-3xl w-36">
                🔽 Download
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg p-2">
              {/* video description */}
              <h1 className="font-bold">
                
                {`${formatViews(videoDetails.items[0].statistics.viewCount)} views ${timeAgo(
                  videoDetails.items[0].snippet.publishedAt
                )}`}
              </h1>
              <div>
                <div
                  className={`${
                    showDescription ? "h-auto" : "h-6"
                  } overflow-hidden`}
                >
                  {videoDetails.items[0].snippet.description}
                </div>
                <div>
                  <h1
                    className="font-bold cursor-pointer"
                    onClick={handleShowDescription}
                  >
                    {showDescription ? "Show less" : "... more"}
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold my-3">
              Comments {videoDetails.items[0].statistics.commentCount}
            </h1>
          </div>
          <div>
            <VideoComment />
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchVideo;
