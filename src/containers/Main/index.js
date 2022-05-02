import { Box, Typography } from '@mui/material';
import React from "react";
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';

export const Main = () => {
  

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#e5e5f7',
      opacity: '0.8',
      backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
      backgroundSize: '10px 10px',
    }}>

    <Typography variant='h1'>My picz</Typography>

    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      gap: '40px'
    }}>

      <CustomButton btnColor1='#FFD2BF' btnColor2='#FFD2BC' content='Sign in' path='/signin'/>

      <CustomButton btnColor1='#FFD5EC' btnColor2='#FFD8E9' content='Sign up' path="/signup"/>

    </Box>

    </Box>
  )
}
