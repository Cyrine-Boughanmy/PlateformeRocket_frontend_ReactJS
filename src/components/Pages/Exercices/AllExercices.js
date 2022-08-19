import { Box, Button, FormControl, Grid, InputLabel, Select, Stack, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap-typeahead';

const AllExercices = () => {
    const [exercices, setExercices] = useState([]);
    const [categories,setCategories] = useState([]);

    const getExercices = async () => {
        // const response = await axios.get("http://localhost:8000/cours/liste/");
        const response = await axios.get(
        //   " https://rocketcoding-plateform-back.herokuapp.com/cours/liste/"
          "http://localhost:8000/exercices/liste/"
        );
    
        console.log("reponsee", response.data);
        setExercices(response.data);
      };
      useEffect(() => {
          getExercices();      
        
      }, []);
      // const onChangeComboBox = (e) => {
      //   const selectedId = e.target.value;
      //   const selectedCatégorie = getExercices().filter((d) => d.id == selectedId)[0];
      //   setExercices(selectedCatégorie);
      // };


  return (
    <>
    <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
          {/* <h2>ReactJS Dependent Dropdown - Country, State and City</h2> */}

          <form >
          <Box mt={3} width="100%">
          <FormControl size="small" fullWidth>
          <InputLabel>Catégorie</InputLabel>
          <Select 
          defaultValue = ""
          value={exercices?.id} 
          label="Catégorie" >
          {exercices.map((e) => {
                   return <MenuItem value={e.id}>{e.categorie}</MenuItem>;
                  })}
          </Select>

              
              </FormControl>
              </Box>
              <Box mt={3} width="100%">
          <FormControl size="small" fullWidth>
          <InputLabel>Cours</InputLabel>
          <Select 
          defaultValue = ""
          value={exercices?.id} 
          label="Cours" >
          {exercices.map((e, key) => {
                      return <MenuItem value={e.id}>{e.cours}</MenuItem>;
                  })}
          </Select>

              
              </FormControl>
              </Box>
              </form>
              
          
          </Box>
          </Container>
      {/* <Container>
      <p style={{ fontSize: "60px", color:"#014AAD"  }}>Exercices</p>
      <Grid container
        spacing={2}
        direction="column"
        alignItems="stretch"
        >
      {exercices.map((exercice) => (
        <Grid item key={exercice.id} xs="auto">
            <Box
            sx={{
                width: 350,
                
                padding: "20px",
                backgroundColor: '#014AAD',
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px"
                
              }}>
                <Typography>{exercice.nom}</Typography>

            </Box>

        </Grid>
       ))}

      </Grid>
      </Container> */}
    </>
  )
}

export default AllExercices;
