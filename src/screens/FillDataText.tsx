import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { component } from "../components";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import { FormTextProps } from "../model";
import { useNavigate } from "react-router-dom";
interface FormProps {
  FormText?: any | null;
}
const FillDataText: React.FC<FormProps> = ({
  FormText = {
    heading1: "",
    heading2: "",
    description: "",
    bussinessname: "",
    bussinesslable: "",
    weburl: "",
  },
}) => {
  // const ResponsiveForm: React.FC<FormProps> = ({ heading1, heading2, description }) => {
  const [formData, setFormData] = useState<FormTextProps>(FormText);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClickBack = () => {
    navigate("/UserDash");
  };

  const handleOpen = () => {
    setOpenModal(true);
    setTimeout(() => {
      handleClose(); // Close the modal
      navigate("/CreateAds");
      // history.push('/another-page');  // Replace '/another-page' with the actual path you want to navigate to
    }, 600);
  };
  const handleClose = () => setOpenModal(false);

  const handleSubmit = () => {
    if (
      !formData.heading1 ||
      !formData.heading2 ||
      !formData.description ||
      !formData.bussinesslable ||
      !formData.bussinessname ||
      !formData.weburl
    ) {
      console.log("All fields are required");
    } else {
      handleOpen();
      console.log("Form Data", JSON.stringify(formData));
    }
    //var data = {};
  };

  const currencies = [
    {
      value: "1",
      label: "Clothes",
    },
    {
      value: "2",
      label: "Food",
    },
    {
      value: "3",
      label: "Catering",
    },
    {
      value: "4",
      label: "Stone Crusher",
    },
  ];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography component="h1" variant="h6">
          Create text And Media
        </Typography>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", marginRight: 2 }}
            >
              <TextField
                margin="normal"
                placeholder="Add heading that would make users intrested"
                label="Heading 01"
                name="heading1"
                value={formData.heading1}
                onChange={handleChange}
                sx={{ marginRight: 2, width: "110%" }}
              />
              <TextField
                margin="normal"
                placeholder="Add heading that would make users intrested"
                label="Heading 02"
                name="heading2"
                value={formData.heading2}
                onChange={handleChange}
                sx={{ marginRight: 2, width: "110%" }}
              />
            </Box>
            <TextField
              margin="normal"
              // fullWidth
              multiline
              rows={4.5}
              label="Description 01"
              name="description"
              placeholder="Add primary text to help 
            more about your product services or offers  "
              value={formData.description}
              onChange={handleChange}
              sx={{ width: "60%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Bussiness Name"
              placeholder="Add your bussiness name"
              name="bussinessname"
              value={formData.bussinessname}
              onChange={handleChange}
              sx={{ marginRight: 2 }}
            />
            <TextField
              margin="normal"
              fullWidth
              select
              label="Bussiness Lable"
              placeholder="Select label that best suit for add"
              name="bussinesslable"
              value={formData.bussinesslable}
              onChange={handleChange}
              // sx={{ marginRight: 2 }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TextField
            margin="normal"
            fullWidth
            label="Website URL"
            placeholder="Add the URL of the landing page you want to redirect user to"
            name="weburl"
            value={formData.weburl}
            onChange={handleChange}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <component.Button
              onClick={handleClickBack}
              background="#555555"
              lable="Back"
            />
            <component.Button
              onClick={handleSubmit}
              background=" #008CBA"
              lable="Submit"
            />
          </Box>
        </form>
      </Box>
      {openModal && (
        <Modal
          keepMounted
          open={openModal}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <component.Modals />
        </Modal>
      )}
    </Container>
  );
};
export default FillDataText;
