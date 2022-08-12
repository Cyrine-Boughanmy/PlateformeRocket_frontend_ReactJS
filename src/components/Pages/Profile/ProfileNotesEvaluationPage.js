import { Box, Grid, Tooltip, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const ProfileNotesEvaluationPage = () => {
  return (
    <>
    <Container>
      <Box>
        <Typography
          style={{
            fontSize: "60px",
            // marginTop: "20px",
            marginBottom: "20px",
            color: "#014AAD",
            
            fontStyle: "normal",
            fontW: "800",
            lineHeight: "116px",
            textAlign: "center",
          }}>
        
        Notes évaluations
            </Typography>
            </Box>
            <br></br>
            <Grid
        container
        spacing={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={20}
        >
            <Grid item xs="auto"
            >
            <Box
            
                sx={{
                 
                 
                  padding: "20px",
                  backgroundColor: "#014AAD",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
                <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
                Évaluation 1 13/20
                </Typography>
                

             </Box>
             </Grid>
             <Grid item xs="auto"
            >
           
          <Box
            
                sx={{
                
                 
                  padding: "20px",
                  backgroundColor:"#014AAD",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px"
                 
                  
                }}
             >
            <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
            Évaluation 2 13/20
                </Typography>
               </Box> 
             </Grid>
             <Grid item xs="auto"
            >
              <Box
            
            sx={{
              
             
              padding: "20px",
              backgroundColor:"#014AAD",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px"
             
              
            }}
         >
            <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
            Évaluation 3 13/20
                </Typography>
                </Box>
             </Grid>
             <Grid item xs="auto"
            >
              <Box
            
            sx={{
              
             
              padding: "20px",
              backgroundColor:"#014AAD",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px"
             
              
            }}
         >
            <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>
            Évaluation 4 13/20
                </Typography>
                </Box>
             </Grid>

        </Grid>
    

    </Container>
    </>
  );
}

export default ProfileNotesEvaluationPage;
