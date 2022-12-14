import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedUserSharpIcon from "@mui/icons-material/VerifiedUserSharp";
import WebAssetSharpIcon from "@mui/icons-material/WebAssetSharp";
import ReorderSharpIcon from "@mui/icons-material/ReorderSharp";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import CategoryIcon from '@mui/icons-material/Category';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const history = useNavigate();

  const { logoutUser } = useContext(AuthContext);
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => history("/profile")}>Profile</MenuItem>
      <MenuItem onClick={() => history("/monCompte")}>Mon compte</MenuItem>
      <MenuItem onClick={() => logoutUser()}>Se d??connecter</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#014AAD", color: "#FFFFFF" }}
      >
        <Toolbar sx={{ backgroundColor: "#014AAD", color: "#FFFFFF" }}>
          {/* DRAWER CODE */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={2} width="250px" textAlign="center" role="presentation">
              <Typography variant="h6" component="div">
                Dashboard
              </Typography>
            </Box>
            <Divider />
            <List>
              <ListItem button onClick={() => history("/home")}>
                <HomeIcon />
                <ListItemText primary={"Home"}></ListItemText>
              </ListItem>
              <ListItem button onClick={() => history("/profile")}>
                <PersonIcon />
                <ListItemText primary={"Profile"}></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem button onClick={() => history("/categories")}>
                <CategoryIcon />
                <ListItemText primary={"Cat??gories"}></ListItemText>
              </ListItem>
              <ListItem button onClick={() => history("/cours")}>
                <ImportContactsSharpIcon />
                <ListItemText primary={"Cours"}></ListItemText>
              </ListItem>

              <ListItem button onClick={() => history("/exercices")}>
                <WebAssetSharpIcon />
                <ListItemText primary={"Exercices"}></ListItemText>
              </ListItem>
              <ListItem button onClick={() => history("/evaluations")}>
                <VerifiedUserSharpIcon />
                <ListItemText primary={"Evaluations"}></ListItemText>
              </ListItem>

              <ListItem button onClick={() => history("/qcm")}>
                <ReorderSharpIcon />
                <ListItemText primary={"QCM"}></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={() => history("/blog")}>
                <ArticleIcon />
                <ListItemText primary={"Blog"}></ListItemText>
              </ListItem>
              <ListItem button onClick={() => history("/annonces")}>
                <NewspaperIcon />
                <ListItemText primary={"Annonces"}></ListItemText>
              </ListItem>
            </List>
          </Drawer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Rocket Coding Bootcamp
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            > */}
            {/* <Badge badgeContent={4} color="error"> */}
            {/* <Badge color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            > */}
            {/* <Badge badgeContent={17} color="error"> */}
            {/* <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
