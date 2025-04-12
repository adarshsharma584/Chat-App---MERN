import React from "react";
import { useEffect } from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
function Home() {
  return (
    <>
      <div className="flex">
        <UserSidebar />
        <MessageContainer />
      </div>
    </>
  );
}

export default Home;
