import React, { useContext } from "react";
import { AllContext } from "../contexts/AllContext";

function TopPanel() {
  const { totalUsers } = useContext(AllContext);
  return (
    <div>
      <h1>Total Number of Users: {totalUsers}</h1>
    </div>
  );
}

export default TopPanel;
