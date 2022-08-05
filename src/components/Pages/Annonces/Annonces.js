import react, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import Annonceimg from "../../../assets/images/annonce/annonce-intro.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Pagination from "react-paginate";
import "../hooks/Pagination.css";

const AllAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const annoncesPerPage = 3;
  const pagesVisited = pageNumber * annoncesPerPage;
  const displayAnnonces = annonces.slice(
    pagesVisited,
    pagesVisited + annoncesPerPage
  );
  const pageCount = Math.ceil(annonces.length / annoncesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const getAnnonces = async () => {
    const response = await axios.get(
      // "https://rocketcoding-plateform-back.herokuapp.com/annonces/annonce/"
      "http://localhost:8000/annonces/annonce/"
    );

    console.log("reponsee", response.data);
    setAnnonces(response.data);
  };
  useEffect(() => {
    getAnnonces();
  }, []);
  const history = useNavigate();
  const getDate = (date) => {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString("fr-FR", options);
  };

  return (
    <>
      <Container>
        <p
          style={{
            fontSize: "60px",
            marginBottom: "40px",
            color:"#014AAD",
            
            fontStyle: "normal",
            fontW: "800",
            fontSize: "96px",
            lineHeight: "116px",
            textAlign: "center",
          }}
        >
          ANNONCES EMPLOI
        </p>
        <Grid container spacing={3}>
          {displayAnnonces.map((item) => (
            <Grid item key={annonces.id} xs={12} md={6} lg={4}>
              <Card
                sx={{
                  textAlign: "left",
                  boxShadow: "0 4px 4px rgb(0 0 0 / 25%)",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image_annonce}
                    alt="Annonce"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ margin: "10px", color:"#014AAD" }}
                    >
                      {item.titre}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ margin: "10px" }}
                    >
                      {getDate(item.date_annonce)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ margin: "10px", color: "#040404" }}
                    >
                      Publiée par : {item.publie_par}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ margin: "10px" }}
                    >
                      {
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.body,
                          }}
                        ></div>
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => history(`/annonce/${item.id}`)}
                    sx={{ margin: "10px" ,backgroundColor:"#014AAD" }}
                  >
                    En Savoir plus
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        <Pagination
          previousLabel={"Précédent"}
          nextLabel={"Suivant"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default AllAnnonces;
