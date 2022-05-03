import { Box, Typography } from '@mui/material';
import React from "react";
import { NavigateButton } from '../../components/NavigateButton';
import { styles } from '../../utils/styles';

export const Main = () => {
  

  return (
    <Box sx={styles.MainContainer}>

    <Typography variant='h1'>My picz</Typography>

    <Box sx={styles.btnMainContainer}>

      <NavigateButton btnColor1='#FFD2BF' btnColor2='#FFD2BC' content='Sign in' path='/signin'/>
      <NavigateButton btnColor1='#FFD5EC' btnColor2='#FFD8E9' content='Sign up' path="/signup"/>

    </Box>

    </Box>
  )
}
