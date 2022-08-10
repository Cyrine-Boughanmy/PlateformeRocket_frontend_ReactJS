import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Editor from 'react-simple-code-editor';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar'
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
const ExercicePage = () => {
    const history = useNavigate();
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
      );

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
            fontSize: "96px",
            lineHeight: "116px",
            textAlign: "center",
          }}
        >
          Exercice 1
        </p>
        <Box textAlign="left" >
        <button
        className="go-back-link__actualites"
        onClick={() => history("/exercices")}
      >
        Retour
      </button>
        </Box>
        <Box textAlign="center" mt={5}>
        <Box textAlign="center" mt={5} 
        sx={{
                 
                 
            
            backgroundColor: "#FFFFFF",
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
            <Typography variant="h5" gutterBottom component="div" color="#014AAD" fontFamily='Arimo'>Consignes</Typography>
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
        <Box textAlign="center" mt={5} 
        sx={{
                 
                 
            
            backgroundColor: "#FFFFFF",
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
            <Typography variant="h5" gutterBottom component="div" color="#014AAD" fontFamily='Arimo'>Réponse </Typography>
            </Box>
        <Box textAlign="center" mt={5} maxWidth="sm"
            sx={{
                 
                backgroundColor: "#FFFFFF",
                marginBottom:5,
                padding: "10px",
                textAlign:"center",
                marginLeft:"auto",
                marginRight:"auto",
               
                
              }}
            >
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
    />

            </Box>
            <Box sx={{margin : 5}}>
            <Button variant="contained">
                Valider
            </Button>
            </Box>

      </Container>
    </>
  )
}

export default ExercicePage
