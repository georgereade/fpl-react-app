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
import { createTheme, ThemeProvider } from "@mui/material/styles";

function InfoWindow(props) {
  const { gwstatsChecked } = useContext(AllContext);

  const theme = createTheme({
    typography: {
      fontFamily: "Chivo, sans-serif",
    },
  });

  return (
    <div id="infoCard">
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Collapse in={!!gwstatsChecked}>
            <Zoom in={!!gwstatsChecked} triggerOnce={true}>
              <Card sx={{ maxWidth: 275, minWidth: 275 }}>
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
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    {props.gameweekName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    Highest Score:<strong>{props.topScore}</strong> <br />
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
                      Top Scoring Player:
                      <br /> {props.topPlayerName}:{" "}
                      <strong>{props.topPlayerPoints}pts</strong>
                      <br />
                      <br />
                      Most Captained: <br />
                      {props.mostCaptained}
                      <br />
                      <br />
                      Chips Played:
                      <br />
                      Bench Boost: <strong>{props.bb}%</strong>
                      <br />
                      Triple Captain: <strong>{props.tc}%</strong>
                      <br />
                      Free Hit: <strong>{props.fh}%</strong>
                      <br />
                      Wildcard: <strong>{props.wc}%</strong>
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

export default InfoWindow;
