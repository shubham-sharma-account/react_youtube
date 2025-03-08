import React, { useEffect, useState } from "react";
import { BASE_URL, GOOGLE_API_KEY } from "../utils/constants";
import { timeAgo } from "../utils/common";

function VideoComment() {
  const [comments, setComments] = useState(null);

  const getComments = async () => {
    const data = await fetch(
      `${BASE_URL}/commentThreads?part=snippet&maxResults=30&videoId=TRYv8830UFI&key=${GOOGLE_API_KEY}`
    );
    const result = await data.json();
    setComments(result.items);
  };

  useEffect(() => {
    getComments();
  }, []);

  comments && console.log(comments);

  return !comments
    ? "..Loading Comments"
    : comments.map((comment) => {
        return <div className="flex py-3 my-3" key={comment.id}>
          <div>
            <img
              src={
                comment.snippet.topLevelComment.snippet
                  .authorProfileImageUrl
              }
              className="w-12 h-12 rounded-full"
              alt="profile-image"
            />
          </div>
          <div className="px-3">
            <h1>
              {comment.snippet.topLevelComment.snippet.authorDisplayName}{" "}
              {timeAgo(comment.snippet.topLevelComment.snippet.publishedAt)}
            </h1>
            <h2>{comment.snippet.topLevelComment.snippet.textDisplay}</h2>
          </div>
        </div>;
      });
}

export default VideoComment;
