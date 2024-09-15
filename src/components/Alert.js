import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function InfoAlert() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box className="infoalert">
      <Collapse in={open}>
        <Alert
          severity="info"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Toggle which stats to display above. Stats will be automatically
          updated after each gameweek.
        </Alert>
      </Collapse>
    </Box>
  );
}
