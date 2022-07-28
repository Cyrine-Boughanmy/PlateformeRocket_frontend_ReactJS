import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Container } from "@mui/system";

const CoursPage = ({
  id,
  nom,
  description,
  titre_module,
  image_cours,
  //   fichier_cours,
  categorie,
  cours_module,
}) => {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        justify="center"
        direction="row"
        alignItems="center"
      >
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={image_cours}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {nom}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Voir cours
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoursPage;
