import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dropdownstats from "./Dropdownstats";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function InfoWindow(props) {
  return (
    <div id="infoCard">
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
          <Typography gutterBottom variant="h5" component="div">
            {props.teamName} {props.gameweekName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Highest Score:{props.topScore} Average Score:{props.averageScore}
          </Typography>
        </CardContent>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Additional Stats</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Top Scoring Player: <li>{props.playerName}</li>
              </p>{" "}
              Chips Played
              {props.bboost}
              {props.tc}
              {props.wc}
              {props.fh}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
}

export default InfoWindow;
