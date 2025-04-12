import React from 'react'
import  { useEffect } from "react";
import User from "./User";
import Message from "./Message";
import SendMessage from "./SendMessage";
function MessageContainer() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="p-3 border-b border-b-white/10">
          <User userDetails={selectedUser} />
        </div>

        <div className="h-full overflow-y-auto p-3">
          {messages?.map((messageDetails) => {
            return (
              <Message
                key={messageDetails?._id}
                messageDetails={messageDetails}
              />
            );
          })}
        </div>

        <SendMessage />
      </div>
    </>
  );
}

export default MessageContainer