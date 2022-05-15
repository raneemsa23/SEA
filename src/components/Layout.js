import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink, useLocation } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";

import { Container, Grid } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import NewServiceModal from "./NewServiceModal";
const drawerWidth = 240;

export default function Layout(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handelNewServiceModal = () => {
    setOpenModal(true);
  };
  const handelCloseNewServiceModal = () => {
    setOpenModal(false);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List className="list">
        <ListItem
          disablePadding
          className={location.pathname == "/" ? "active" : ""}
        >
          <NavLink to="/">
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem
          disablePadding
          className={location.pathname == "/courses" ? "active" : ""}
        >
          <NavLink to="/courses">
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem
          disablePadding
          className={location.pathname == "/library" ? "active" : ""}
        >
          <NavLink to="/library">
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItemButton>
          </NavLink>
        </ListItem>{" "}
        <ListItem
          disablePadding
          className={location.pathname == "/services" ? "active" : ""}
        >
          <NavLink to="/services">
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ManageAccountsIcon className="icon" />
              </ListItemIcon>
              <ListItemText primary="Services" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                className={location.pathname == "/new-service" ? "active" : ""}
              >
                <NavLink to="/new-service">
                  <Box>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={handelNewServiceModal}
                    >
                      <ListItemIcon>
                        <StarBorder className="icon" />
                      </ListItemIcon>
                      <ListItemText primary="New Service" />
                    </ListItemButton>
                  </Box>
                </NavLink>
              </List>
            </Collapse>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "primary",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <MenuBookIcon />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              marginLeft: "1%",
              fontFamily: "Lobster, cursive",
            }}
          >
            SEA
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          marginTop: "4.7%",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div />
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{ display: { xs: "block", md: "none", color: "white" } }}
              >
                hide on screens wider than md
              </Box>
            </Grid>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
        <NewServiceModal
          open={openModal}
          handelCloseNewServiceModal={handelCloseNewServiceModal}
        />
      </Box>
    </Box>
  );
}
