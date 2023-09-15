import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { Zoom } from "react-awesome-reveal";
import Collapse from "@mui/material/Collapse";
import { AllContext } from "../contexts/AllContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TeamsWindow(props) {
  const { teamstatsChecked } = useContext(AllContext);

  const theme = createTheme({
    typography: {
      fontFamily: "Chivo, sans-serif",
    },
  });

  return (
    <div id="infoCard">
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Collapse collapsedSize={0} in={!!teamstatsChecked}>
            <Zoom in={!!teamstatsChecked} triggerOnce={true}>
              <Card sx={{ maxWidth: 275, minWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="team-badges"
                  height="140"
                  id="player-photos"
                  image={
                    "https://resources.premierleague.com/premierleague/badges/rb/t" +
                    props.badge +
                    ".svg"
                  }
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    {props.teamName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    Player Points: <strong>{props.playerPoints}</strong> <br />%
                    of Total:{" "}
                  </Typography>
                </CardContent>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>More Stats</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Top Player: {props.topPlayerPoints}pts <br />
                      Strength: {props.strength}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Zoom>
          </Collapse>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default TeamsWindow;
