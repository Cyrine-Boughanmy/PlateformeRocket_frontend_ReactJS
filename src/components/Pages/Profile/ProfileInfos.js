import { Container } from '@material-ui/core';
import { Box, Grid, div, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
import userimg from '../../../assets/images/user-profile/userprofile.jpg';
import './ProfileInfos.css';
import {  useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { saveAs } from 'file-saver';


const PageProfil = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const history = useNavigate();
  const fetchData = async () => {
    // const response = await axios.get("http://localhost:8000/cours/liste/");
    const response = await axios.get(
      // " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
      `http://localhost:8000/simple-user/user/${id} `
    );

    console.log("reponsee", response.data);
    setUser(response.data);
  };
  useEffect(() => {
    
      fetchData();
     
  }, []);
  

  return (

    <>
    
    <Container sx={{padding:"10px"}}>
    <p
          style={{
            fontSize: "60px",
            marginBottom: "40px",
            color: "#014AAD",
           
            fontStyle: "normal",
            fontW: "800",
            fontSize: "96px",
            lineHeight: "116px",
            textAlign: "center",
          }}
        >
          PROFIL
        </p>
        <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        >
          <Grid item xs="auto">
          <button
        className="go-back-link__actualites"
        onClick={() => history("/profile")}
      >
        Retour
      </button>
      <br></br>
      
          </Grid>
          
            <Grid item xs="auto">
         
            <Box
               
                sx={{
                  width: 215,
                  
                  
                  
                }}
             >
              <img
               style={{
                width:"100%",
                borderRadius:"50px"
              }} 
              src={user.profile_image} 
              alt='user profile '/>
             </Box>
             <br></br>
             <Button type='submit' 
             style={{fontFamily:'Arimo'}}onClick={()=>{
              saveAs(user.profile_image, 'image.jpg')
             }}>Télécharger photo</Button>
      
            </Grid>
            <Grid item xs="auto"
            >
            <Box
            
                sx={{
                  width: 400,
                  
                  padding: "20px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
              <div className="text-cordonnées">
                    Nom : {user.nom}
              </div>
              <div className="text-cordonnées">
                    Prénom : {user.prenom}
              </div>
              <div className="text-cordonnées">
                    Adresse : {user.adresse}
              </div>
              <div className="text-cordonnées">
                    Code Postale : {user.code_postal}
              </div>
              <div className="text-cordonnées">
                    Ville : {user.ville}
              </div>
              <div className="text-cordonnées">
                    Mail : {user.email}
              </div>
              <div className="text-cordonnées">
                    Numéro de téléphone : {user.num_tel}
              </div>
             </Box>
      
            </Grid>
            <Grid item xs="auto">
            <Box
           
                sx={{
                  width: 400,
                  height: 340,
                  padding: "20px",
                  backgroundColor: '#014AAD',
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                  
                }}
             >
              <div className="titre-présentation">Présentation</div>
              <p className="text-présentation">{user.presentation}</p>
             </Box>
      
            </Grid>
            
        </Grid>
        <br></br>
         <button className='btn-download' type='submit' onClick={()=>{
              saveAs(user.resume, 'resume.pdf',{type: "text/plain;charset=utf-8"})
             }}>Télécharger mon cv</button>
            <br></br>
            <br></br>
           
            <button className='btn-update'>MODIFIER MES INFOS</button>

    </Container>
    </>

  );
}

export default PageProfil;
