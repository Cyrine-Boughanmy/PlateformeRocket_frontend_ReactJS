import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PrimarySearchAppBar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#014AAD",
  ...theme.typography.body2,
  padding: "10px",
  width: "50%",
  margin: "auto",
  fontFamily:'Arimo',
  textAlign: "center",
  color: "#FFFFFF",
  fontSize: "20px",
  cursor: "pointer",
}));

const Profile = () => {
  const history = useNavigate();
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Box>
        <p style={{ fontSize: "60px" , fontFamily:'Arimo', color:"#014AAD" }}>PROFILE</p>
        <Stack spacing={2} mt={2}>
          <Item onClick={() => history("/profilepage")}>Profile</Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" , fontFamily:'Arimo'}}
            onClick={() => history("/monCompte")}
          >
            Connexion
          </Item>
          <br />
        </Stack>
      </Box>
    </div>
  );
};

export default Profile;
