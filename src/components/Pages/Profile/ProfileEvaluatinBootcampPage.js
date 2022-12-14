import { Box, Grid, Tooltip, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const ProfileEvaluatinBootcampPage = () => {
  return (
    <>
    <Container >
        <Box
        sx={{padding: "20px"}}>
        <Typography
          style={{
            width:"100%",
            fontSize: "60px",
            marginTop: "20px",
            marginBottom: "20px",
            color: "#014AAD",
            fontFamily:'Arimo',
            fontStyle: "normal",
            fontW: "800",
            lineHeight: "116px",
            textAlign: "center",
          }}>
        
        Évolution bootcamp
            </Typography>
            </Box>
            <br></br>
            <Grid
        container
        spacing={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mb={20}
        >
            <Grid item xs="auto"
            >
            <Box
            
                sx={{
                  width: 300,
                  height:250,
                  padding: "20px",
                  backgroundColor: "#014AAD",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
                <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
                Progression COURS
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h4" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
                80 %
                </Typography>

             </Box>
             </Grid>
             <Grid item xs="auto"
            >
            <Box
            
                sx={{
                  width: 300,
                  height:250,
                  padding: "20px",
                  backgroundColor: "#014AAD",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
                <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
                Moyenne Score QCM
                </Typography>
                <br></br>
                <br></br>
                
                <Typography variant="h4" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
               13/20
                </Typography>


             </Box>
             </Grid>

        </Grid>
    

    </Container>
    </>
  );
}

export default ProfileEvaluatinBootcampPage;
