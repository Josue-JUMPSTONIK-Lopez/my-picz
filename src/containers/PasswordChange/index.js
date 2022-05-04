import React from 'react'
import { Box, Container, TextField, Button} from '@mui/material'
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';

export const PasswordChange = () => {
    return (
        <Container>
            <Box sx={styles.EditUserInfo}>
            <Box sx={styles.Form}>
                <Box sx={styles.btnReturnEditUser}>
                    <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/settings'/>
                </Box>
                
                <TextField
                required
                id="filled-required"
                label="Old password"
                variant="filled"
                type='password'
                sx={{width: '100%'}}
                />
                <TextField
                required
                id="filled-required"
                label="New password"
                variant="filled"
                type='password'
                sx={{width: '100%'}}
                />
                <Button variant='contained'>Change password</Button>
            </Box>
            </Box>
        </Container>
    )
}
