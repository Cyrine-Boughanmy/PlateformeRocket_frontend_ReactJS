import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CoursPage from "./CoursPage";
import { Card, Grid } from "@material-ui/core";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AllCours = () => {
  const [cours, setCours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getCourses();
      setIsLoading(false);
    }
  }, [isLoading]);
  const getCourses = async () => {
    const response = await axios.get("http://localhost:8000/cours/liste/");
    console.log("reponsee", response.data);
    setCours(response.data);
  };

  return (
    // <div>
    //   {cours.map(function (courses) {
    //     return (
    //       <CoursPage
    //         id={courses.id}
    //         key={courses.id}
    //         nom={courses.nom}
    //         description={courses.description}
    //         titre_module={courses.titre_module}
    //         image_cours={courses.image_cours}
    //         fichier_cours={courses.fichier_cours}
    //         categorie={courses.categorie}
    //         cours_module={courses.cours_module}
    //       />
    //     );
    //   })}
    // </div>
    <Container>
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
                    {courses.nom}
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
  );
};

export default AllCours;
