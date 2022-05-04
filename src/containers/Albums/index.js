import React, {useEffect} from 'react'
import { Grid} from '@mui/material'
import { GrindItem } from '../../components/GridItem';
import { dummyAlbums} from '../../utils/dummyData'
// import { useParams } from 'react-router';
import { Album } from '../../components/Album';

export const Albums = () => {
    // const param = useParams();
    
    useEffect(() => {
    
    
    }, [])
    

  return (
    <Grid container spacing={{ xs: 0.5, sm: 0.5, md: 0.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dummyAlbums.map(data => 
            <GrindItem key={data.id}>
              <Album key={data.id} name={data.name}/>
            </GrindItem>)}
    </Grid>
  )
}
