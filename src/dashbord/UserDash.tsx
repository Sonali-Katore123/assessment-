import Box from "@mui/material/Box";
import { component } from "../components";
import MainCard from "../components/MainCard";

const UserDash = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 4,
          margin: 3,
        }}
      >
        <Box>
          <component.TableData />
        </Box>
        <Box>
          <MainCard />
        </Box>
      </Box>
    </>
  );
};

export default UserDash;
