import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { NavigateButton } from '../../components/NavigateButton';
import { FormInputField} from '../../components/FormInputField'
import { Link } from "react-router-dom";
import { styles } from '../../utils/styles';
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.SignContainer}>
    <Box sx={styles.btnReturnSingUp}>
      <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/'/>
    </Box>

      <Box sx={styles.Form}>
        <Typography variant='h5'>Create your new account</Typography>
        <FormInputField htmlfor='name' labelContent='Name' type='text' describedby='name-text'></FormInputField>
        <FormInputField htmlfor='username' labelContent='Username' type='text' describedby='username-text'></FormInputField>
        <FormInputField htmlfor='password' labelContent='Password' type='password' describedby='password-text'></FormInputField>
        <FormInputField htmlfor='repeat-password' labelContent='Repeat password' type='password' describedby='repeat-password-text'></FormInputField>
        <Button variant='contained' size='large' onClick={()=>navigate('/home')}>Sign up</Button>
        <Typography variant='p'>already registered?</Typography>
        <Link to="/signin">go to login</Link>
      </Box>
    </Box>
  )
}
