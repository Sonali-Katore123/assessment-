import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();

  const handleGoText = () => {
    navigate("/UserDash");
  };

  const handleGoMedia = () => {
    navigate("/CreateAds");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, backgroundColor: "#ffffff", color: "#242424" }}
        >
          APP LOGO 
        </Typography>
        <Button
          color="inherit"
          sx={{ color: "#242424" }}
          onClick={handleGoText}
        >
          DASHBORD
        </Button>
        <Button
          color="inherit"
          sx={{ color: "#242424" }}
          onClick={handleGoMedia}
        >
          CREATE ADs
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default TopNavBar;
