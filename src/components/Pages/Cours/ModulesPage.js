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
import { Document, Page } from "react-pdf";

const CoursPage = () => {
  const [sousModule, setSousModule] = useState([]);
  const [change, setChange] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    sousModules();
  }, []);

  const sousModules = async () => {
    const response = await axios.get(
      `https://rocketcoding-plateform-back.herokuapp.com/cours/details/${id}`
      // `http://localhost:8000/cours/details/${id}`
    );
    setSousModule(response.data);
    console.log("response details of SOUS MODULES", response.data);
  };
  const history = useNavigate();

  const handleChange = () => {
    setChange(!change);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#014AAD",
    ...theme.typography.body2,
    padding: "10px",
    width: "50%",
    margin: "auto",

    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "20px",
    cursor: "pointer",
  }));

  return (
    <div>
      <PrimarySearchAppBar />
      <br />
      <Box textAlign="left">
      <button
              className="go-back-link__actualites"
              onClick={() => history(-1)}
            >
              Retour
            </button>
      </Box>
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
                <p style={{ fontSize: "60px", color: "#014AAD" }}>
                  {item.titre_module}
                </p>
                {item.sous_module?.map((index) => (
                  <Grid item key={item.id}>
                    <br />
                    <Container style={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          backgroundColor: "#014AAD",
                          color: "#FFFFFF",
                          height: "100px",
                          width: "500px",
                          padding: "25px",
                          // "&:hover": {
                          //   backgroundColor: "primary.light",
                          // },
                          fontSize: "33px",
                        }}
                      >
                        {index && index.num_module}
                      </Box>
                    </Container>
                    {/* <br /> */}
                    {/* <Container>
                      <Box>ficher : {index && index.fichier_cours}</Box>
                    </Container> */}
                    <br />
                    <Container>
                      <Box
                        sx={{
                          backgroundColor: "#FFFFFF",
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
                        {
                          <div
                            dangerouslySetInnerHTML={{
                              __html: index && index.cours_module,
                            }}
                          ></div>
                        }
                      </Box>
                      <Container>
                        <Document file={index && index.ficher_cours_pdf}>
                          <Page pageNumber={1} />
                        </Document>
                      </Container>
                      <div style={{ textAlign: "right" }}>
                        <strong>J'ai lu ce chapitre</strong>
                        <Checkbox onChange={handleChange} />
                      </div>
                    </Container>

                    <br />
                  </Grid>
                ))}
              </div>
            );
          })}
        </Grid>
        <Box>
          <Stack spacing={2} mt={2}>
            {/* <Item onClick={() => history("/profile")}>Valider</Item> */}
            {/* <Item disabled={change}>Valider</Item> */}
            <Box textAlign="center">
              <Button
                style={{
                  backgroundColor: "#014AAD",
                  color: "#FFFFFF",
                  width: "500px",
                  height: "50px",
                  fontFamily: "Arimo",
                }}
                variant="contained"
                disabled={change}
                onClick={() => history("/cours")}
              >
                {" "}
                Valider
              </Button>
            </Box>
            <br />
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default CoursPage;
