import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
interface BoxComponentProps {
  title: string;
  text: string;
}

const BottomNavigations: React.FC<BoxComponentProps> = ({ title, text }) => {
  return (
    <Box
      sx={{
        width: 288,
        height: 56.2,
        backgroundColor: "#e3e1e1",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8.8,
        borderRadius: 1,
        marginLeft: -9.9,
      }}
    >
      <Typography sx={{ color: "black", fontSize: 12 }}>{text}</Typography>
      <Typography sx={{ color: "black", fontWeight: "bold" }}>
        {title}
      </Typography>
    </Box>
  );
};
export default BottomNavigations;
