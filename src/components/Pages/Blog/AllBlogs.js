import react , { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import blogimg from '../../../assets/images/blog/Blog-intro.jpg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DaysJS from 'react-dayjs';






const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        const response = await axios.get(
          "http://localhost:8000/blogs/blog/"
        );
    
        console.log("reponsee", response.data);
        setBlogs(response.data);
      };
      useEffect(() => {
        getBlogs();
      }, []);
      const history = useNavigate();


  return (
    <Container>
        <p style={{ fontSize: "60px", marginBottom :"20px" }}>
        Notre blog
      </p>
      <Grid container spacing={3}>
      {blogs.map((item) => (
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
          <DaysJS element="span" format ="DD MM YYYY" asString={ true }>{item.date}</DaysJS>
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
    </Container>
  );
}

export default AllBlogs;
