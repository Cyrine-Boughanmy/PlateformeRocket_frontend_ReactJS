import { Box } from '@mui/material';
import React from 'react'
import {BounceLoader, DotLoader} from 'react-spinners';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <>
    <div className='loader-section' >
      {/* <Box textAlign="center" backgroundColor="#97bffc" sx={{width:100,
                        height:100 ,display:"flex", justifyContent:"center", alignItems:"center"}}> */}
       <Box backgroundColor = "#FFFFFF" textAlign="center">             
      <BounceLoader
        color="#014AAD"
        size={100}
        
      /></Box>
      {/* </Box> */}
      
    </div>
    </>
  )
}

export default PageLoader
