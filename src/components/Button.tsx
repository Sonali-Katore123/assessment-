import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface StyledButtonProps {
  background?: string;

}

const StyledButton = styled(Button)<StyledButtonProps>(({ background  })=>({
  background: background ,
  border: 1,
  borderRadius: 5,
  color: 'white' ,
  height: 37,
  width:'26%',
  '&:hover': {
    // Set the hover styles to be the same as the normal state
    background: background,
    color: 'white',
  },
})); 

interface MyButtonProps {
  onClick: () => void;
  lable:string;
  background?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick , lable, background }) => {
  return <StyledButton onClick={onClick} background={background}  >{lable}</StyledButton>;
};

export default MyButton;
