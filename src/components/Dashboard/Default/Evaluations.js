import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PrimarySearchAppBar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#3243E0",
  ...theme.typography.body2,
  padding: "10px",
  width: "50%",
  margin: "auto",
  textAlign: "center",
  color: "#FFFCFC",
  fontSize: "20px",
  cursor: "pointer",
}));

const Evaluations = () => {
  const history = useNavigate();
  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Box>
        <p style={{ fontSize: "60px" }}>Evaluations</p>
        <Stack spacing={2} mt={2}>
          <Item onClick={() => history("/home")}>Evaluation 1</Item>
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
        </Stack>
      </Box>
    </div>
  );
};

export default Evaluations;
