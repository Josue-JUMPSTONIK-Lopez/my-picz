import React, {useEffect} from 'react'
import { Grid} from '@mui/material'
import { GrindItem } from '../../components/GridItem';
import { dummyData } from '../../utils/dummyData'
import { useNavigate } from "react-router-dom";
import { Photo } from '../../components/Photo';

export const Photos = () => {

    const navigate = useNavigate();


    
    useEffect(() => {
    
    
    }, [])
    

  return (
    <Grid container spacing={{ xs: 0.5, sm: 0.5, md: 0.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dummyData.map(data => 
            <GrindItem key={data.id} >
              <Photo key={data.id} img={data.img} description={data.img} navigate={()=> navigate(`/home/posts/${data.id}`)}/>
            </GrindItem>)}
    </Grid>
  )
}
