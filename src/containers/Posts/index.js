import React from 'react'
import { Box, Container} from '@mui/material'
import { useParams } from 'react-router';

export const Posts = () => {

    const {id} = useParams();
    console.log(id)
  return (
    <Container>
        <Box sx={{}}>
            
        </Box>
    </Container>
  )
}
