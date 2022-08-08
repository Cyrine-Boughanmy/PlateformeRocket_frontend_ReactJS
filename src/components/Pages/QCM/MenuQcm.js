import { Box, Button } from '@mui/material';
import React from 'react';
import SelectField from '../hooks/SelectField';
import {Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MenuQcm = () => {

  
    const handleSubmit = ()=>{};
    const history = useNavigate();
  return (
    <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
      <form onSubmit={handleSubmit}>
      <SelectField label="Categorie" />
      <SelectField  label="Cours" />
      <SelectField  label="QCM" />
     
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit" 
        sx={{backgroundColor:" #014AAD"}}
        onClick={() => history("/pageqcm")}
        >
          Get Started
        </Button>
      </Box>
    </form>
    </Box>
    </Container>
  );
}

export default MenuQcm;
