import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { CustomButton } from '../../components/CustomButton';
import { FormInputField} from '../../components/FormInputField'
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e5e5f7',
      opacity: '0.8',
      backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
      backgroundSize: '10px 10px',
    }}>
    <Box sx={{
      alignSelf: 'start',
      position: 'relative',
      top: '-50px',
      left: '50px'
    }}>
      <CustomButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/'/>
    </Box>

      <Box sx={{
        backgroundColor: '#fafafe',
        borderRadius: '10px',
        margin: '40px',
        padding: '25px 20px 10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
      }}>
        <Typography variant='h5'>Create your new account</Typography>

        <FormInputField htmlfor='name' labelContent='Name' type='text' describedby='name-text'></FormInputField>
        <FormInputField htmlfor='username' labelContent='Username' type='text' describedby='username-text'></FormInputField>
        <FormInputField htmlfor='password' labelContent='Password' type='password' describedby='password-text'></FormInputField>
        <FormInputField htmlfor='repeat-password' labelContent='Repeat password' type='password' describedby='repeat-password-text'></FormInputField>
        <Button variant='contained' size='large'>Sign up</Button>
        <Typography variant='p'>already registered?</Typography>
        <Link to="/signin">go to login</Link>
      </Box>
    </Box>
  )
}
