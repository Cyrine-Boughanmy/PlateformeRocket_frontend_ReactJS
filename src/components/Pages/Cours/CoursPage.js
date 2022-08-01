import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Container } from "@mui/system";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";

const CoursPage = () => {
  const [module, setModule] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    modules();
  }, []);

  const modules = async () => {
    const response = await axios.get(
      `http://localhost:8000/cours/details/${id}`
    );
    setModule(response.data);
    console.log("response details of something", response.data);
  };
  const history = useNavigate();

  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Container>
        <Grid
          container
          spacing={3}
          justify="center"
          direction="row"
          alignItems="center"
        >
          {module.modules?.map((item) => (
            <Grid item key={item.id} xs={12} md={6} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  {/* <CardMedia
                component="img"
                height="180"
                image={image_cours}
                alt="green iguana"
              /> */}
                  <CardContent>
                    <Typography
                      onClick={() => history(`/sousModule/${item.id}`)}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {/* Titre : {module.modules && module.modules.titre_module} */}
                      <strong>{item && item.titre_module}</strong>
                      {/* id : {item && item.id} */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* Cours : {module.modules && module.modules.cours_module} */}
                      {/* Cours : {item && item.cours_module} */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => history("/cours")}
                  >
                    Retour
                  </Button>
                </CardActions>
                <CardActions>
                  <div style={{ float: "right" }}>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => history(`/sousModule/${item.id}`)}
                    >
                      Voir module
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CoursPage;
