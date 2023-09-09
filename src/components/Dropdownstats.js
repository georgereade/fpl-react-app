import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Dropdownstats(props) {
  return (
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
          {props.bboost}
          {props.tc}
          {props.wc}
          {props.fh}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Dropdownstats;
