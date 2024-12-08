import React from "react";
import { useState } from "react";
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
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const items = [
    { text: "Home", icon: <HomeIcon className="icon" />, section: null },
    { text: "New", icon: <NewIcon className="icon" />, section: null },

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
      text: "Tracks",
      icon: <MusicNoteIcon className="icon" />,
      section: "Library",
    },

    {
      text: "Playlists",
      icon: <QueueMusicIcon className="icon" />,
      section: "Playlists",
    },
    {
      text: "Shop", // Added Shop item
      icon: <StorefrontIcon className="icon" />,
      section: "Shop",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/multi-search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  const Divider = ({ label }) => <div className="section-title">{label}</div>;

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: "drawer" }}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#252526",
          overflowY: "scroll",
          scrollbarWidth: "none",
          borderRight: "0.2vw gray solid",
        },
        "& .MuiDrawer-paper::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box sx={{ padding: "10px" }}>
        <Box className="logo">Melodic</Box>

        {/* Search Bar */}
        <Box
          className="search-bar"
          style={{ display: "flex", alignItems: "center" }}
        >
          <SearchIcon
            style={{ marginRight: "8px", cursor: "pointer" }}
            onClick={handleSearch}
          />
          <InputBase
            placeholder="Search"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </Box>

        {/* Sidebar Items */}
        <List>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {/* Render the section divider if it is the first item of the section */}
              {index === 0 || items[index - 1].section !== item.section
                ? item.section && <Divider label={item.section} />
                : null}
              <Link
                to={item.text === "Home" ? "/" : `/${item.text.toLowerCase()}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItem className="sidebar-item">
                  <ListItemIcon className="icon">{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      "& .MuiTypography-root": {
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: "bold",
                        fontSize: 14,
                      },
                    }}
                  />
                </ListItem>
              </Link>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
