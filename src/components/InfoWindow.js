import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dropdownstats from "./Dropdownstats";

function InfoWindow(props) {
  return (
    <div id="infoCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="highest-score" height="140" image="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.teamName} {props.gameweekName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Highest Score:{props.topScore} Average Score:{props.averageScore}
          </Typography>
        </CardContent>
        <Dropdownstats />
      </Card>
    </div>
  );
}

export default InfoWindow;
