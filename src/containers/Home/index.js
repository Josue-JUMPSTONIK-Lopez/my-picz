import { Box, Container, Avatar, Stack, Button} from '@mui/material'
import React from 'react'
import { CountSphere } from '../../components/CountSphere'
import { dummyData } from '../../utils/dummyData'
import { Link, Outlet} from "react-router-dom";
import { styles } from '../../utils/styles'
import './styles.css';
import { NavigateButton } from '../../components/NavigateButton'
import { useParams } from 'react-router';

// https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg
export const Home = () => {
  // const {id} = useParams();
  //   console.log(id)

  return (
    <Container>
      <Box sx={styles.HomeContainer}>
        <Box sx={styles.HomeHeaderContainer}>
          <Box sx={styles.ProfileStatsContainer}>
            <Avatar 
              variant="rounded" 
              src="https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj" 
              sx={styles.avatar}/>
            <CountSphere count={dummyData.length} stat='Posts'/>
            <CountSphere count={0} stat='Albums'/>
          </Box>
          <Box sx={styles.ProfileDescriptionContainer}>
            <Stack spacing={1}>
              <h3 className='text-white'>Description</h3>
              <p className='text-white'>The diagnosis of schizophrenia stuck for a while, despite not being an accurate description of his behavior, although later writers would drop it and go back to the idea that these identities were costumes to be picked up and put down at will. todos los dias es una oportunidad para reflexionar en por que creemos lo que creemos y cuestionarno si lo que sabemos nos hace hacer lo correcto o incorrecto</p>
            </Stack>
          </Box>
          <Box sx={styles.ProfileActionFunction}>
            <NavigateButton btnColor1='#555564' btnColor2='#2B2C39' width='50%' content='settings profile' path='edit'/>
            <Button variant='contained' size='large' sx={{backgroundColor: 'red', width: '50%'}}>delete</Button>
          </Box>
          <Box sx={styles.ProfileBottomContainer}>
            <Link className="link" role="button" to="/home/photos"> Photos</Link>
            <Link className="link" role="button" to="/home/albums"> Albums</Link>
            <Link className="link" role="button" to="/home/posts/null"> Posts</Link>
          </Box>
        </Box>
        <Box sx={styles.HomeGridContainer}>
          <Outlet/>
        </Box>
      </Box>
      <button className="float">
        <i className="my-float">+</i>
      </button>
    </Container>
  )
}
