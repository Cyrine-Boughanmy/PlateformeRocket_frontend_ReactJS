import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar'

const EvaluationPage = () => {
    const history = useNavigate();

  return (
    <>
       <PrimarySearchAppBar />
       <Container >
       <p
          style={{
            fontSize: "60px",
            marginBottom: "40px",
            color:"#014AAD",
            fontStyle: "normal",
            fontW: "800",
            lineHeight: "116px",
            textAlign: "center",
          }}
        >
          Evaluation 1
        </p>
        <Box textAlign="left" >
        <button
        className="go-back-link__actualites"
        onClick={() => history("/evaluations")}
      >
        Retour
      </button>
        </Box>
        <Box textAlign="center" mt={5}>
        <Box textAlign="center" mt={5} 
        sx={{
                 
                 
            
            backgroundColor: "#014AAD",
            width: 200,
            height:50,
            marginBottom:5,
            padding: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            textAlign:"center",
            marginLeft:"auto",
            marginRight:"auto",
           
            
          }}
        >
            <Typography variant="h5" gutterBottom component="div" color="#FFFFFF" fontFamily='Arimo'>Consignes</Typography>
        </Box>
        <Box textAlign="center" mt={5} maxWidth="sm"
            sx={{
                 
                backgroundColor: "#FFFFFF",
                marginBottom:5,
                padding: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                textAlign:"center",
                marginLeft:"auto",
                marginRight:"auto",
               
                
              }}
            >
                <Typography variant="body2" component="div" fontFamily='Arimo'
                sx={{ padding: "5px" }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit eu sapien et at id ac. Urna, nisl consectetur pharetra odio sodales. Cursus a nisl tortor massa sed. Ac egestas sit sit sollicitudin amet, tristique aenean auctor. Est tortor sit sagittis sit neque. Eget consectetur tempor a at nulla facilisi adipiscing. A massa a sit orci ut et amet semper integer. Molestie aliquet vel aliquet dignissim arcu lobortis. Amet viverra diam id scelerisque.</Typography>
            </Box>
        </Box>
        <ButtonGroup 
        orientation='vertical'>
                 <Button variant="text">Télécharger pdf</Button>
                 <Button variant="text">Télécharger images</Button>
                 <Button variant="text">Lien Github</Button>
         </ButtonGroup>
         <Box sx={{
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginBottom:5,
                    width: 200,
                    height:50,

                    }}
                    maxWidth="sm">
            <button className='btn-se-connecter' style={{fontSize:"18px", borderShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}>
                Livrer Evaluation 1
            </button>
            </Box>

       </Container>
    </>
  )
}

export default EvaluationPage
