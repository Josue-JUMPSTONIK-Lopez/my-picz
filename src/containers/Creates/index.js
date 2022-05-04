import React from 'react'
import { Container, Box} from '@mui/material';
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';


export const Creates = () => {
  return (
    <Container>
        <Box sx={styles.EditUserInfo}>
            <Box sx={styles.btnReturnSingIn}>
                <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/home/photos'/>
            </Box>
            <Box sx={styles.Form}>
                <NavigateButton btnColor1='#00C6C2' btnColor2='#7389F4' content='upload photo' width='100%' path='/creates/photo'/>
                <NavigateButton btnColor1='#00C6C2' btnColor2='#7389F4' content='create album' width='100%' path='/creates/album'/>
            </Box>
        </Box>
    </Container>
  )
}
