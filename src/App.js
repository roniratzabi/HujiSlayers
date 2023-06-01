import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ChatBox from "./ChatBox";
import ShowImage from "./Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="content">
        <Home />
      </div> */}
      <div className="chat">
        <ChatBox />
      </div>
      <div className="image">
        <ShowImage />
      </div>
    </div>
  );
}

export default App;

// //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
