import React from 'react'
import { Box, Container, TextField, Avatar, Input, Button} from '@mui/material'
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';

export const UserUpdate = () => {
  return (
    <Container>
        <Box sx={styles.EditUserInfo}>
          <Box sx={styles.Form}>
            <Box sx={styles.btnReturnEditUser}>
              <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/settings'/>
            </Box>
            <Avatar 
              variant="rounded" 
              src="https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj" 
              sx={styles.avatar}/>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            <TextField
              required
              id="filled-required"
              label="Name"
              variant="filled"
              sx={{width: '100%'}}
            />
            <TextField
              required
              id="filled-required"
              label="Username"
              variant="filled"
              sx={{width: '100%'}}
            />
            <TextField
              id="filled-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
              variant="filled"
              sx={{width: '100%'}}
            />
            <Button variant='contained'>Update</Button>
          </Box>
        </Box>
    </Container>
  )
}
