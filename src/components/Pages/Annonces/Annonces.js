import react , { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import Annonceimg from '../../../assets/images/annonce/annonce-intro.jpg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DaysJS from 'react-dayjs';






const AllAnnonces = () => {

    const [annonces, setAnnonces] = useState([]);
    const getAnnonces = async () => {
        const response = await axios.get(
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
    <Container>
        <p style={{ fontSize: "60px", marginBottom :"40px" , color:"#3243E0",fontFamily: 'Inter',
              fontStyle: "normal",
              fontW: "800",
              fontSize: "96px",
              lineHeight: "116px",
              textAlign: "center"  }}>
        Nos annonces
      </p>
      <Grid container spacing={3}>
      {annonces.map((item) => (
        <Grid item key={annonces.id} xs={12} md={6} lg={4}>
    <Card sx={{ textAlign:"left",boxShadow :"0 4px 4px rgb(0 0 0 / 25%)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image_annonce}
          alt="Annonce"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" 
          sx={{ margin:"10px" , color :"#3243E0"}}>
            {item.titre}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{ margin:"10px" , color:"#040404"}}>
          {getDate(item.date_annonce)}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{ margin:"10px" , color:"#040404"}}>
          Publiée par : {item.publie_par} 
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
        history(`/annonce/${item.id}`)}
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

export default AllAnnonces;