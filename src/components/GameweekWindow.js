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
import Collapse from "@mui/material/Collapse";
import { Zoom } from "react-awesome-reveal";
import { AllContext } from "../contexts/AllContext";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

function GameweekWindow(props) {
  const { gwstatsChecked } = useContext(AllContext);

  let theme = createTheme({
    typography: {
      fontFamily: "Chivo, sans-serif",
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <div id="gameweekCard">
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Collapse in={!!gwstatsChecked}>
            <Zoom in={!!gwstatsChecked} triggerOnce={true}>
              <Card className="materialCard">
                <CardMedia
                  component="img"
                  alt="highest-score"
                  height="140"
                  id="player-photos"
                  image={
                    "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                    props.playerImg +
                    ".png"
                  }
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                    className="itemName"
                  >
                    {props.gameweekName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    Top Score:<strong>{props.topScore}</strong> <br />
                    Average Score:
                    <strong>{props.averageScore}</strong>
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
                    <Typography display="block">
                      Player of the Week:
                      <br />{" "}
                      <strong className="gold">
                        {props.topPlayerName} {props.topPlayerPoints}pts
                      </strong>
                      <br />
                      <br />
                      Most Captained: <br />
                      <strong className="gold">{props.mostCaptained}</strong>
                      <br />
                      <br />
                      Chips Played:
                      <br />
                      {props.bb > 0 ? "Bench Boost: " + props.bb + "%" : ""}
                      <br />
                      {props.tc > 0 ? "Triple Captain: " + props.tc + "%" : ""}
                      <br />
                      {props.fh > 0 ? "Free Hit: " + props.fh + "%" : ""}
                      <br />
                      {props.wc > 0 ? "Wildcard: " + props.wc + "%" : ""}
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

export default GameweekWindow;
