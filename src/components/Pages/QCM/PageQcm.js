import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import {Container} from '@mui/material';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
import { useNavigate } from 'react-router-dom';
const PageQcm = () => {
    const history = useNavigate();
  return (
    <>
     <PrimarySearchAppBar />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
      <Typography variant="h4">Catégorie :</Typography>
      <Typography variant="h5">Cours : HTML</Typography>
      <Typography variant="h5">Nom du QCM : QCM HTML 1</Typography>
      <Box textAlign="left" mt={5}>
      <Typography variant="h6">Question  : Cochez la bonne réponse :</Typography>
      </Box>
      <Box textAlign="left" mt={5}>
      <FormControl textAlign="left">
      {/* <FormLabel >Catégorie :</FormLabel>
      <FormLabel >Cours :</FormLabel>
      <FormLabel >Question  :</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="réponse 1" control={<Radio />} label="réponse 1" />
        <FormControlLabel value="réponse 2" control={<Radio />} label="réponse 2" />
        <FormControlLabel value="réponse 3" control={<Radio />} label="réponse 3" />
        <FormControlLabel value="réponse 4" control={<Radio />} label="réponse 4" />

      </RadioGroup>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit" 
        sx={{backgroundColor:" #014AAD"}}
        onClick={() => history("/pageqcm")}
        >
          Valider
        </Button>
      </Box>
    </FormControl>
    </Box>
      </Box>
      </Container>   
    </>
  );
}

export default PageQcm;
