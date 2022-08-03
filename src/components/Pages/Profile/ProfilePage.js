import { Container } from '@material-ui/core';
import { Box, Grid, div, Button } from '@mui/material';
import React from 'react';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
import userimg from '../../../assets/images/user-profile/userprofile.jpg';
import './ProfilePage.css';

const PageProfil = () => {
  return (
    <>
    <PrimarySearchAppBar />
    <Container>
    <p
          style={{
            fontSize: "60px",
            marginBottom: "40px",
            color: "#3243E0",
            fontFamily: "Inter",
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
        spacing={6}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        >
            <Grid item xs="auto">
            <Box
               
                sx={{
                  width: 215,
                  height: 220,
                  
                  
                }}
             >
              <img style={{
                width:"100%",
                borderRadius:"50px"
              }} src={userimg} alt='user image'/>
             </Box>
             <br></br>
             <Button>Télécharger photo</Button>
      
            </Grid>
            <Grid item xs="auto"
            >
            <Box
            
                sx={{
                  width: 400,
                  
                  padding: "20px",
                  backgroundColor: "#FFFCFC",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
              <div className="text-cordonnées">
                    Nom : 
              </div>
              <div className="text-cordonnées">
                    Prénom : 
              </div>
              <div className="text-cordonnées">
                    Adresse : 
              </div>
              <div className="text-cordonnées">
                    Code Postale : 
              </div>
              <div className="text-cordonnées">
                    Ville : 
              </div>
              <div className="text-cordonnées">
                    Mail : 
              </div>
              <div className="text-cordonnées">
                    Numéro de téléphone : 
              </div>
             </Box>
      
            </Grid>
            <Grid item xs="auto">
            <Box
           
                sx={{
                  width: 400,
                  height: 340,
                  padding: "20px",
                  backgroundColor: '#3243E0',
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                  
                }}
             >
              <div className="titre-présentation">Présentation</div>
              <p className="text-présentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate lacus quis nunc, adipiscing tincidunt aliquam faucibus. Turpis neque, convallis felis aliquam a mattis lacus, a. Ipsum, amet, volutpat interdum elit. Placerat faucibus ac turpis sit.</p>
             </Box>
      
            </Grid>

        </Grid>
        <div><Button>Télécharger mon cv</Button></div>
        <div> <Button>MODIFIER MES INFOS</Button></div>

    </Container>
    </>

  );
}

export default PageProfil;
