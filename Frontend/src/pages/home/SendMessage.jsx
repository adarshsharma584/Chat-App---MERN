import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const SendMessage = () => {
  return (
    <div className="w-full p-3 flex gap-2">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        // onClick={handleSendMessage}
        className="btn btn-square btn-outline btn-primary"
      >
        <IoIosSend />
      </button>
    </div>
  );
};

export default SendMessage;