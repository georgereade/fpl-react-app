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
import Zoom from "@mui/material/Zoom";
import { AllContext } from "../contexts/AllContext";

function InfoWindow(props) {
  const { checked } = useContext(AllContext);

  return (
    <div id="infoCard">
      <Box sx={{ display: "flex" }}>
        <Zoom in={checked}>
          <Card sx={{ maxWidth: 345 }}>
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
                className="windowFont"
              >
                {props.gameweekName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="windowFont"
              >
                Highest Score:{props.topScore} Average Score:
                {props.averageScore}
              </Typography>
            </CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="windowFont">Additional Stats</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="windowFont">
                  Top Scoring Player:{" "}
                  <li>
                    {props.topPlayerName}:{" "}
                    <strong>{props.topPlayerPoints}pts</strong>
                  </li>
                  Most Captained: <li>{props.mostCaptained}</li>
                  Chips Played
                  {props.bboost}
                  {props.tc}
                  {props.wc}
                  {props.fh}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Zoom>
      </Box>
    </div>
  );
}

export default InfoWindow;
