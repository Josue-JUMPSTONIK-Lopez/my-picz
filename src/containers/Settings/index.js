import React from 'react'
import { Container, Box, Button} from '@mui/material';
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';

export const Settings = () => {
  return (
    <Container>
        <Box sx={styles.EditUserInfo}>
            <Box sx={styles.Form}>
            <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='Edit User Information' path='/home/photos'/>
            <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='Change Password' path='/home/photos'/>
            <Button>Delete Acount</Button>
            </Box>
        </Box>
    </Container>
  )
}
