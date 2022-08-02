import react , { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

import axios from "axios";
import { useNavigate } from "react-router-dom";

import PrimarySearchAppBar from '../../../Dashboard/Default/Navbar';
import Pagination from 'react-paginate';
import '../../hooks/Pagination.css';





const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 3;
    const pagesVisited = pageNumber * blogsPerPage;
    const displayBlogs = blogs.slice(pagesVisited, pagesVisited + blogsPerPage);
    const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

    const getBlogs = async () => {
        const response = await axios.get(
          "http://localhost:8000/blogs/blog/"
        );
    
        console.log("reponse", response.data);
        setBlogs(response.data);
      };
      useEffect(() => {
        getBlogs();
      }, []);

      


      const history = useNavigate();

      const getDate = (date) => {
        const newDate = new Date(date);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return newDate.toLocaleDateString("fr-FR", options);
      };


  return (
    <><PrimarySearchAppBar/>
    <Container>
      
        <p style={{ fontSize: "60px", marginBottom :"40px" , color:"#3243E0",fontFamily: 'Inter',
              fontStyle: "normal",
              fontW: "800",
              fontSize: "96px",
              lineHeight: "116px",
              textAlign: "center" }}>
        BLOG
      </p>
      <Grid container spacing={3}>
      {displayBlogs.map((item) => (
        <Grid item key={blogs.id} xs={12} md={6} lg={4}>
    <Card 
     elevation={3}
     sx={{ textAlign:"left", boxShadow :"0 4px 4px rgb(0 0 0 / 25%)"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image_Blog}
          alt="blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" 
          sx={{ margin:"10px" , color :"#3243E0"}}>
            {item.titre}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{ margin:"10px" , color:"#040404"}}>
          {getDate(item.date)}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{ margin:"10px"}}>
            {
                          <div
                            dangerouslySetInnerHTML={{
                              __html:  item.body,
                            }}
                          ></div>
                        }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={() =>
        history(`/article/${item.id}`)}
        sx={{ margin:"10px"}}>
          En Savoir plus
        </Button>
      </CardActions>
    </Card>
    </Grid>
     ))}
     </Grid>
     <div style={{display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
                marginTop: "2rem",}}>
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
    </Container>
    
    </>
  );
}

export default AllBlogs;
