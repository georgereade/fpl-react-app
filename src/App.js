import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import TopPanel from "./components/TopPanel.js";
import InfoAlert from "./components/Alert.js";

function App() {
  return (
    <div>
      <Header />
      <TopPanel />
      <InfoAlert />
      <Body />
    </div>
  );
}

export default App;
