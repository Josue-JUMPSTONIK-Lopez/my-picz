import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material'

export const GrindItem = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        width: '100%',
        height: '100%',
        color: theme.palette.text.secondary,
        background: '#000',
        overflow: 'hidden'
      }));

  return (
    <Grid item xs={1} sm={2} md={3}>
        <Item>
            {props.children}
        </Item>
    </Grid>
  )
}
