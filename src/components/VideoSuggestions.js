import React, { useEffect, useState } from "react";
import { BASE_URL, GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";

function VideoSuggestions() {
  const [videoSuggestion, setVideoSuggestion] = useState(null);
  useEffect(() => {
    const getVideoSuggestions = async () => {
      const result = await fetch(
        `${BASE_URL}/search?part=snippet&eventType=live&maxResults=25&q=news&type=video&key=${GOOGLE_API_KEY}`
      );
      const data = await result.json();
      setVideoSuggestion(data.items);
    };

    getVideoSuggestions();
  }, []);

  videoSuggestion && console.log("videoSuggestion ", videoSuggestion);

  return !videoSuggestion
    ? "...Loading"
    : videoSuggestion.map((suggestion) => {
        return (
          <Link to={`/watch?v=${suggestion.id.videoId}`}>
            <div className="flex p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
              <div>
                <img
                  className="w-40 h-20 rounded-lg max-w-none"
                  src={suggestion.snippet.thumbnails.medium.url}
                  alt="suggestion-thubnail"
                />
              </div>
              <div className="px-2">
                <h1>{suggestion.snippet.title}</h1>
                <h1>{suggestion.snippet.channelTitle}</h1>
              </div>
            </div>
          </Link>
        );
      });
}

export default VideoSuggestions;
