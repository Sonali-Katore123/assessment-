import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PieChart } from "@mui/x-charts/PieChart";

import React from "react";
const data = [
  { id: 0, value: 40, label: "Male" },
  { id: 1, value: 35, label: "Female" },
  { id: 2, value: 25, label: "Unknown" },
];
const card = (
  <React.Fragment>
    <CardContent>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={300}
      />
    </CardContent>
  </React.Fragment>
);
const MainCard = () => {
  return (
    <Box sx={{ width: "100%", margin: 10 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
export default MainCard;
