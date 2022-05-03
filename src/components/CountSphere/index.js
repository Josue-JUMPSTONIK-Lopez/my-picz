import { Box } from '@mui/system'
import React from 'react'

export const CountSphere = (props) => {
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25px'
    }}>
        <p style={{
            color: 'white'
        }}>{props.count}</p>
        <p style={{
            color: 'white'
        }}>{props.stat}</p>
    </Box>
  )
}
