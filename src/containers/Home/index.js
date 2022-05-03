import { Box, Container, Grid, Avatar, Stack, Button} from '@mui/material'
import React from 'react'
import { CountSphere } from '../../components/CountSphere'
import { GrindItem } from '../../components/GridItem'
import { dummyData } from '../../utils/dummyData'
import { Link} from "react-router-dom";
import { styles } from '../../utils/styles'
import './styles.css';

// https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg
export const Home = () => {

  return (
    <Container>
      <Box sx={styles.HomeContainer}>
        <Box sx={styles.HomeHeaderContainer}>
          <Box sx={styles.ProfileStatsContainer}>
            <Avatar 
              variant="rounded" 
              src="https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj" 
              sx={styles.avatar}/>
            <CountSphere count={dummyData.length} stat='Publicaciones'/>
            <CountSphere count={0} stat='Albumes'/>
          </Box>
          <Box 
            sx={styles.ProfileDescriptionContainer}>
            <Stack spacing={1}>
              <h3 className='text-white'>Description</h3>
              <p className='text-white'>lsdjfsdlkfjsdlf</p>
            </Stack>
          </Box>
          <Box
            sx={styles.ProfileActionFunction}>
            <Button>edit profile</Button>
            <Button>delete</Button>
          </Box>
          <Box 
            sx={styles.ProfileBottomContainer}>
            <Link 
              className=""
              role="button"
              to="/home"
              > 
              Photos
              </Link>
              <Link 
              className=""
              role="button"
              to="/album"
              > 
              Albums
              </Link>
          </Box>
        </Box>
        <Box sx={styles.HomeGridContainer}>
          <Grid container spacing={{ xs: 0.5, sm: 0.5, md: 0.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dummyData.map(data => <GrindItem img={data.img} description={data.img}/>)}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
