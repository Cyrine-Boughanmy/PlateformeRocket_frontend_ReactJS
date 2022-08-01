import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button, Box } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PrimarySearchAppBar from "../../Dashboard/Default/Navbar";
import Checkbox from "@mui/material/Checkbox";

const CoursPage = () => {
  const [sousModule, setSousModule] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    sousModules();
  }, []);

  const sousModules = async () => {
    const response = await axios.get(
      `http://localhost:8000/cours/details/${id}`
    );
    setSousModule(response.data);
    console.log("response details of SOUS MODULES", response.data);
  };
  const history = useNavigate();

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

  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Container>
        <Grid
          container
          spacing={12}
          justify="center"
          direction="row"
          alignItems="center"
        >
          {sousModule.modules?.map((item) => {
            return (
              <div>
                {item.sous_module?.map((index) => (
                  <Grid item key={item.id}>
                    <br />
                    <Container>
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          height: "100px",
                          width: "500px",
                          padding: "25px",
                          "&:hover": {
                            backgroundColor: "primary.light",
                          },
                          fontSize: "33px",
                        }}
                      >
                        {index && index.num_module}
                      </Box>
                    </Container>
                    <br />
                    <Container>
                      <Box
                        sx={{
                          backgroundColor: "#FFFCFC",
                          color: "black",
                          height: "500px",
                          width: "500px",
                          padding: "25px",
                          "&:hover": {
                            backgroundColor: "primary.light",
                          },
                          fontSize: "26px",
                        }}
                      >
                        {index && index.cours_module}
                      </Box>
                      <div style={{ textAlign: "right" }}>
                        <strong>J'ai lu ce chapitre</strong>
                        <Checkbox />
                      </div>
                    </Container>
                    {/* <Card sx={{ minWidth: 375 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div"></Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography>
                        <Typography variant="body2">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card> */}
                    <br />
                  </Grid>
                ))}
              </div>
            );
          })}
        </Grid>
        <Box>
          <Stack spacing={2} mt={2}>
            <Item onClick={() => history("/profile")}>Valider</Item>
            <br />
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default CoursPage;
