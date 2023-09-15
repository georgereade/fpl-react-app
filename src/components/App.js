import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import TopPanel from "./TopPanel.js";
import InfoAlert from "./Alert.js";

function App() {
  return (
    <div>
      <InfoAlert />
      <Header />
      <TopPanel />
      <Body />
    </div>
  );
}

export default App;
