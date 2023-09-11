import React, { useContext } from "react";
import { AllContext } from "../contexts/AllContext";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

function TopPanel() {
  const { totalUsers } = useContext(AllContext);
  const formattedUsers = totalUsers.toLocaleString();
  const { checked, setChecked } = useContext(AllContext);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div id="topPanel">
      <h1>Total Users: {formattedUsers}</h1>
      <FormControlLabel
        control={
          <Switch checked={checked} onChange={handleChange} color="warning" />
        }
        label="Show Gameweek Stats"
        id="statsToggle"
      />
    </div>
  );
}

export default TopPanel;
