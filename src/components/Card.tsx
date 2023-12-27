import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BottomNavigations from "./BottomeNavigation";

interface MediaProps {
  loading?: boolean;
  loading1?: boolean;
}

const Media = (props: MediaProps) => {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };
  const { loading = false } = props;
  return (
    <Card sx={{ maxWidth: 300, m: -9 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )
        }
        action={
          loading ? null : (
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            "Ted"
          )
        }
        // subheader={
        //   loading ? (
        //     <Skeleton animation="wave" height={10} width="40%" />
        //   ) : (
        //     '5 hours ago'
        //   )
        // }
      />
      {loading ? (
        <Skeleton sx={{ height: 100 }} animation="wave" variant="rectangular" />
      ) : (
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Inboxgggggggggggggggggggggggggg" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Spamgggggggggggggggggggggg" />
          </ListItem>
          <Divider />
        </List>
      )}
      {/* {loading1 ? (
        <Skeleton sx={{ height: 100 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )} */}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default Media;
