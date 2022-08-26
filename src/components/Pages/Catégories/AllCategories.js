import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AllCategories = () => {
    const [category, setCategories] = useState([]);
    const history = useNavigate();
    const [cours, setCours] = useState([]);

    useEffect(() => {
        getCategories();
      }, []);
    
      const getCategories = async () => {
        const response = await axios.get(
          "https://rocketcoding-plateform-back.herokuapp.com/categorie/liste/"
          // "http://localhost:8000/categorie/liste/"
        );
        console.log("reponsee cat", response.data);
        setCategories(response.data);
      };

      const filterItem = (cat) => {
        const updatedItems = cours.filter((curElem) => {
          return curElem.categorie === cat;
        });
        console.log("updatedItems", updatedItems);
        setCours(updatedItems);
       
      };
      
      useEffect(() => {
      
        getCourses();
        
      }, []);
     
      const getCourses = async () => {
        // const response = await axios.get("http://localhost:8000/cours/liste/");
        const response = await axios.get(
          " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
          // "http://localhost:8000/cours/liste/"
         
        );
        
    
        console.log("reponsee", response.data);
        setCours(response.data);
      };

 const handleClickCours = () => {
  
  setCours((cours.map(q => q.categorie.nom)));
  cours.filter((q,idx) => cours.indexOf(q) === idx);

  console.log("cours : ",cours);
 }

      // const cats = cours.map(q => q.categorie.nom);
      // console.log("cats : ",cats);
      // const fcats = cats.filter((q, idx) => 
      // cats.indexOf(q) === idx);
      // console.log("fcats : ",fcats);
       
      
      

  return (
    <>
      <Container>
        <p
          style={{
            fontSize: "60px",
            marginBottom: "40px",
            color: "#014AAD",
            fontStyle: "normal",
            fontW: "800",
            lineHeight: "116px",
            textAlign: "center",
          }}
        >
          Catégories
        </p>
        <Grid container spacing={3}>
          {category.map((item) => (
            
            <Grid item key={item.id} xs={12} md={6} lg={4}>
              <Card
                elevation={3}
                sx={{
                  textAlign: "left",
                  boxShadow: "0 4px 4px rgb(0 0 0 / 25%)",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image_categorie}
                    alt="categorie"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ margin: "10px", color: "#014AAD" }}
                    >
                      {item.nom}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ margin: "10px" }}
                    >
                      {getDate(item.date)}
                    </Typography> */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ margin: "10px", color: "#040404" }}
                    >
                       {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => history("/cours")}
                    sx={{ margin: "10px", backgroundColor: "#014AAD" }}
                  >
                    voir liste de cours
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          {/* <Pagination
            previousLabel={"Précédent"}
            nextLabel={"Suivant"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          /> */}
        </div>
      </Container>
    </>
  )
}

export default AllCategories
