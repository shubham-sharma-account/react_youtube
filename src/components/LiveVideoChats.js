import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomComment, getRandomName } from "../utils/common";

function LiveVideoChats() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chatSlice.messages);

  //api pooling for live chats
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomComment(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);



  return !chatMessages.length ? (
    "...Loading Live Chats"
  ) : (
    <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg bg-gray-200 h-96 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat, i) => {
        return (
          <div className="flex py-1">
            <img
              className="w-12 h-12 rounded-full"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj3KVn4EbrLuoJ0qYoLWQ4LSiQNWAjQsNQ&s"
              }
              alt="chat-img"
            />
            <p className="p-2 font-bold">{chat.name}</p>
            <p className="px-1 py-2">{chat.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LiveVideoChats;
