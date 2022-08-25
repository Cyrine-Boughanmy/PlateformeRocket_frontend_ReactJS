import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";

import { Card, Grid } from "@material-ui/core";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
// import PageLoader from "../hooks/PageLoader";

const AllCours = () => {
  const [cours, setCours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modules, setModules] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
   
      getCourses();
   
  }, []);
  const getCourses = async () => {
    // const response = await axios.get("http://localhost:8000/cours/liste/");
    const response = await axios.get(
      // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
      "http://localhost:8000/cours/liste/"
      // ,
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + String(authTokens.access),
      //   },
      // }
      // "http://localhost:8000/cours/liste/"
    );
    // const data = await response.json();
    // if (response.status === 200) {
    //   setCours(data);
    // } else if (response.statusText === "Unauthorized") {
    //   logoutUser();
    // }

    console.log("reponsee", response.data);
    setCours(response.data);
  };

  useEffect(() => {
    getModules();
  }, []);

  const getModules = async () => {
    const response = await axios.get(
      // "https://rocketcoding-plateform-back.herokuapp.com/cours/listeModule/"
      "http://localhost:8000/cours/listeModule/"
    );
    console.log("reponsee", response.data);
    setModules(response.data);
  };

  const history = useNavigate();

  return (
    <div>
        <Container>
        <p style={{ fontSize: "60px", color: "#014AAD" }}>Cours</p>
      <Grid container spacing={3}>
        {cours.map((courses) => (
          <Grid item key={courses.id} xs={12} md={6} lg={4}>
            <Card elevation={3}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    gutterBottom
                    variant="h5"
                  >
                    <strong>Catégorie :</strong> {courses.categorie}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="180"
                  image={courses.image_cours}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {courses.nom_cours}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {courses.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <IconButton>
                <h5>
                  {" "}
                  <strong>Ouvrir Cours</strong>
                </h5>{" "}
                <ArrowForwardIosIcon />
              </IconButton>
            </Card>
            {/* <Paper>{courses.nom}</Paper> */}
            {/* <CoursCard cours={courses} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default AllCours;
