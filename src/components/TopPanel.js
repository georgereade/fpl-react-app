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
      <h5>
        Toggle the stat panels. Information will automatically update throughout
        the season.
      </h5>
      <p>Total FPL Users: {formattedUsers}</p>
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
