import { Box } from '@mui/system'
import React from 'react'
import { styles } from '../../utils/styles'

export const CountSphere = (props) => {
  return (
    <Box
    sx={styles.CountSphereContainer}>
        <p style={styles.CountSphereContent}>{props.count}</p>
        <p style={styles.CountSphereContent}>{props.stat}</p>
    </Box>
  )
}
