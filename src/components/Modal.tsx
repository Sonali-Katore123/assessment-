import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "0.1solid #000",
  boxShadow: 54,
  p: 4,
  borderRadius: 3,
};

const Modals = () => {
  return (
    <div>
      <Box sx={style}>
        <Grid item xs={8}>
          <CheckCircleIcon
            sx={{
              fontSize: 60, // Adjust the icon size
              color: "#0080ff", // Adjust the icon color
            }}
          />
        </Grid>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Submited
        </Typography>
      </Box>
    </div>
  );
};
export default Modals;
