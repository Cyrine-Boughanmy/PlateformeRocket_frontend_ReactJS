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
  textAlign: "center",
  color: "#FFFFFF",
  fontSize: "20px",
  fontFamily:'Arimo',
  cursor: "pointer",
}));

const Home = () => {
  const history = useNavigate();
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Box>
        <p style={{ fontSize: "60px" , color:"#014AAD" }}>HOME</p>
        <Stack spacing={2} mt={2}>
          <Item onClick={() => history("/profile")}>Profile</Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/cours")}
          >
            Cours
          </Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/exercices")}
          >
            Exercices
          </Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/evaluations")}
          >
            Evaluations
          </Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/qcm")}
          >
            QCM
          </Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/blog")}
          >
            Blog
          </Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/annonces")}
          >
            Annonces
          </Item>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
