import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Container} from '@mui/material';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
import { useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';
const PageQcm = () => {
    const history = useNavigate();
const [currentQuestion , setCurrentQuestion] = useState(0);
const [score , setScore] = useState("");
  
      
  

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'réponse 2') {
      setHelperText('réponse correcte !');
      setError(false);
    } else if (value === 'réponse 1') {
      setHelperText('réponse incorrecte!');
      setError(true);
    }else if (value === 'réponse 3') {
      setHelperText('réponse incorrecte!');
      setError(true);
    } else if (value === 'réponse 4') {
      setHelperText('réponse incorrecte!');
      setError(true);
    }  
    else {
      setHelperText('Veuillez choisir une réponse.');
      setError(true);
    }
  };
  return (
    <>
     <PrimarySearchAppBar />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Box textAlign="left" mt={5}>
      <Typography variant="h4">Catégorie : Développement web</Typography>
      <Typography variant="h5">Cours : HTML</Typography>
      <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
      </Box>
      <Box textAlign="left" mt={5}>
      <Typography variant="h6">Question {currentQuestion + 1 } of {QuestionList.length}: </Typography>
      </Box>
      <Box textAlign="left" mt={5}>
      <form onSubmit={handleSubmit}>
      <FormControl textAlign="left" error={error} variant="standard">
      {/* <FormLabel >Catégorie :</FormLabel>
      <FormLabel >Cours :</FormLabel>
      <FormLabel >Question  :</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={handleRadioChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value="réponse 1" control={<Radio />} label="réponse 1" />
        <FormControlLabel value="réponse 2" control={<Radio />} label="réponse 2" />
        <FormControlLabel value="réponse 3" control={<Radio />} label="réponse 3" />
        <FormControlLabel value="réponse 4" control={<Radio />} label="réponse 4" />

      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>

      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit" 
        sx={{backgroundColor:" #014AAD"}}
        onClick={() => history("/pageqcm")}
        >
          Suivant
        </Button>
      </Box>
    </FormControl>
    </form>
    </Box>
      </Box>
      </Container>   
    </>
  );
}

export default PageQcm;
