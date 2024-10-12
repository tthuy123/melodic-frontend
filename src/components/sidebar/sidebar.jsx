import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  InputBase,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NewIcon from "@mui/icons-material/NewReleases";
import RadioIcon from "@mui/icons-material/Radio";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import AlbumIcon from "@mui/icons-material/Album";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";

const Sidebar = () => {
  const items = [
    { text: "Home", icon: <HomeIcon className="icon" />, section: null },
    { text: "New", icon: <NewIcon className="icon" />, section: null },
    { text: "Radio", icon: <RadioIcon className="icon" />, section: null },
    { text: "Recently Added", icon: <AccessTimeIcon className="icon" />, section: "Library" },
    {
      text: "Artists",
      icon: <PersonIcon className="icon" />,
      section: "Library",
    },
    {
      text: "Albums",
      icon: <AlbumIcon className="icon" />,
      section: "Library",
    },
    {
      text: "Songs",
      icon: <MusicNoteIcon className="icon" />,
      section: "Library",
    },
    {
      text: "Made for You",
      icon: <QueueMusicIcon className="icon" />,
      section: "Library",
    },
    {
      text: "All Playlists",
      icon: <QueueMusicIcon className="icon" />,
      section: "Playlists",
    },
  ];

  const Divider = ({ label }) => <div className="section-title">{label}</div>;
  return (
    <Drawer variant="permanent" anchor="left" classes={{ paper: "drawer" }}>
      <Box sx={{ padding: "10px" }}>
        <Box className="logo">Melodic</Box>

        {/* Search Bar */}
        <Box className="search-bar">
          <SearchIcon style={{ marginRight: "8px" }} />
          <InputBase placeholder="Search" fullWidth />
        </Box>

        {/* Sidebar Items */}
        <List>
          {items.map((item, index) => (
            <React.Fragment key={index}>
            {/* Render the section divider if it is the first item of the section */}
            {index === 0 || items[index - 1].section !== item.section ? (
              item.section && <Divider label={item.section} />
            ) : null}

            <ListItem button key={item.text}>
              <ListItemIcon className="icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default Sidebar;