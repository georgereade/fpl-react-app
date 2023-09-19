import React, { useContext } from "react";
import { AllContext } from "../contexts/AllContext";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TopPanel() {
  const { totalUsers } = useContext(AllContext);
  const formattedUsers = totalUsers.toLocaleString();
  const { gwstatsChecked, setgwstatsChecked } = useContext(AllContext);
  const { teamstatsChecked, setteamstatsChecked } = useContext(AllContext);

  const theme = createTheme({
    typography: {
      fontFamily: "Chivo, sans-serif",
    },
  });

  const handleGWChange = () => {
    setgwstatsChecked((prev) => !prev);
  };

  const handleStatsChange = () => {
    setteamstatsChecked((prev) => !prev);
  };

  return (
    <div className="topPanel">
      <ThemeProvider theme={theme}>
        <div className="sticky topPanel">
          {" "}
          <p>Total FPL Users: {formattedUsers}</p>
          <FormControlLabel
            control={
              <Switch
                checked={!!gwstatsChecked}
                onChange={handleGWChange}
                color="warning"
              />
            }
            label="Gameweek Stats"
            id="statsToggle"
          />
          <FormControlLabel
            control={
              <Switch
                checked={!!teamstatsChecked}
                onChange={handleStatsChange}
                color="warning"
              />
            }
            label="Team Stats"
            id="statsToggle"
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default TopPanel;
