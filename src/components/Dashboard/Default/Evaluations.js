import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PrimarySearchAppBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"#014AAD",
  ...theme.typography.body2,
  padding: "10px",
  width: "50%",
  margin: "auto",
  textAlign: "center",
  color: "#FFFFFF",
  fontFamily:'Arimo',
  fontSize: "20px",
  cursor: "pointer",
}));

const Evaluations = () => {
  const [evaluation,setEvaluation]= useState([]);
  const history = useNavigate();
  const getEvaluations = async () => {
    // const response = await axios.get("http://localhost:8000/cours/liste/");
    const response = await axios.get(
      // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
      "http://localhost:8000/evaluations/liste/"
    );

    console.log("reponsee", response.data);
    setEvaluation(response.data);
  
    
  };
  useEffect(() => {
    
      getEvaluations();
    
  }, []);

  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Box>
        <p style={{ fontSize: "60px" , color:"#014AAD" }}>Evaluations</p>
        <Stack spacing={2} mt={2}>
        {evaluation.map((evalu) => (
          <>
          
          <Item
          
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/cours")}
          >
            {evalu.titre}
          </Item>
          <br />
          </>
          ))}
          {/* <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/exercices")}
          >
            Evaluation 3
          </Item>
          <br />
          <Item
            style={{ margin: "auto", padding: "10px", fontSize: "20px" }}
            onClick={() => history("/exercices")}
          >
            Evaluation 4
          </Item>
          <br /> */}
        </Stack>
      </Box>
    </div>
  );
};

export default Evaluations;
