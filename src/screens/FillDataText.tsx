import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { component } from "../components";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";

interface FormProps {
  heading1: string;
  heading2: string;
  description: string;
}
const FillDataText: React.FC<FormProps> = ({
  heading1,
  heading2,
  description,
}) => {
  // const ResponsiveForm: React.FC<FormProps> = ({ heading1, heading2, description }) => {
  const [formData, setFormData] = useState<FormProps>({
    heading1,
    heading2,
    description,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClick = () => {
    window.alert("Button clicked!");
    // You can replace window.alert with your custom Alert function if needed
  };

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => {
    setOpenModal(true);
    setTimeout(() => {
      handleClose(); // Close the modal
      // history.push('/another-page');  // Replace '/another-page' with the actual path you want to navigate to
    }, 600);
  };
  const handleClose = () => setOpenModal(false);
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
              name="heading1"
              value={formData.heading1}
              onChange={handleChange}
              sx={{ marginRight: 2 }}
            />
            <TextField
              margin="normal"
              fullWidth
              select
              label="Bussiness Lable"
              placeholder="Select label that best suit for add"
              name="heading2"
              value={formData.heading2}
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
            name="heading2"
            value={formData.heading2}
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
              onClick={handleClick}
              background="#555555"
              lable="Back"
            />
            <component.Button
              onClick={handleOpen}
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
