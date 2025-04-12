import React, { useEffect, useRef } from "react";


function Message() {
    const messageRef = useRef(null);
    return (
    <>
      <div
        ref={messageRef}
        // className={`chat ${
        //   userProfile?._id === messageDetails?.senderId
        //     ? "chat-end"
        //     : "chat-start"
        // }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={
                userProfile?._id === messageDetails?.senderId
                  ? userProfile?.avatar
                  : selectedUser?.avatar
              }
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">{messageDetails?.message}</div>
      </div>
    </>
  );
};

export default Message;
