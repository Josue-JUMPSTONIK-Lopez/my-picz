import React from 'react'
import { Container, Box, Button} from '@mui/material';
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';
import { useNavigate } from "react-router-dom";

export const Settings = () => {
    
  const navigate = useNavigate();

  return (
    <Container>
        <Box sx={styles.EditUserInfo}>
            <Box sx={styles.btnReturnSingIn}>
                <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/home/photos'/>
            </Box>
            <Box sx={styles.Form}>
                <NavigateButton btnColor1='#00C6C2' btnColor2='#7389F4' content='Edit User Information' width='100%' path='/settings/edit'/>
                <NavigateButton btnColor1='#00C6C2' btnColor2='#7389F4' content='Change Password' width='100%' path='/settings/password'/>
                <Button variant='contained' size='large' sx={{backgroundColor: '#00C6C2', width: '100%'}} onClick={()=> navigate('/')}>sing out</Button>
                <Button variant='contained' size='large' sx={{backgroundColor: 'red', width: '100%'}}>Delete Account</Button>
            </Box>
        </Box>
    </Container>
  )
}
