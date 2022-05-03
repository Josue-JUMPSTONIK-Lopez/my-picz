import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { NavigateButton } from '../../components/NavigateButton';
import { FormInputField} from '../../components/FormInputField'
import { Link } from "react-router-dom";
import { styles } from '../../utils/styles';
import { useNavigate } from "react-router-dom";

export const SignIn = () => {

  const navigate = useNavigate();


  return (
    <Box sx={styles.SignContainer}>
      <Box sx={styles.btnReturnSingIn}>
        <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/'/>
      </Box>
      
      <Box sx={styles.Form}>
        <Typography variant='h5'>Login to your account</Typography>
        <FormInputField htmlfor='username' labelContent='Username' type='text' describedby='username-text'></FormInputField>
        <FormInputField htmlfor='password' labelContent='Password' type='password' describedby='password-text'></FormInputField>
        <Button variant='contained' size='large' onClick={()=> navigate('/home')}>Sign in</Button>
        <Typography variant='p'>Not registered?</Typography>
        <Link to="/signup">Create your account</Link>
      </Box>
    </Box>
  )
}
