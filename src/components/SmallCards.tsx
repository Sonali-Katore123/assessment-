import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Media from "./Card";
import BottomNavigations from "./BottomeNavigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { component } from ".";

const SmallCards = () => {
  const navigate = useNavigate();
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 130,
    height: 240,
    padding: theme.spacing(10),
    ...theme.typography.body2,
    textAlign: "center",
    boxShadow: "0px 0px 54px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
  }));

  const handleNext = () => {
    if (isChecked1) {
      
      navigate("/FillDataText");
      console.log("Navigate to page 1");
    } else if (isChecked2) {
    
      navigate("/FillDataMedia");
      console.log("Navigate to page 2");
    } else {
      // Handle other cases or show an error message
      console.log("No checkbox selected");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2} style={{ marginBottom: "200px" }}>
          <DemoPaper square={false}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked1}
                  onChange={() => setChecked1(!isChecked1)}
                  style={{ top: -80, left: "-250%" }}
                />
              }
              label=""
            />
            <Media />
            <BottomNavigations text={"Create"} title={"Text Ads"} />
          </DemoPaper>
          <DemoPaper square={false}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked2}
                  onChange={() => setChecked2(!isChecked2)}
                  style={{ top: -80, left: "-250%" }}
                />
              }
              label=""
            />
            <Media />
            <BottomNavigations text={"Create"} title={"Media Ads"} />
          </DemoPaper>
        </Stack>
      </div>
      <div style={{ marginBottom: 19 }}>
        <component.Button
          onClick={handleNext}
          lable="Next"
          background="#008CBA"
        />
      </div>
    </div>
  );
};
export default SmallCards;
