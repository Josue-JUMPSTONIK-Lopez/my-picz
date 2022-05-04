import React from 'react'
import { Box, Container, TextField, Avatar, Input, Button, Stack} from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styles } from '../../utils/styles'
export const Settings = () => {
  return (
    <Container>
        <Box sx={styles.HomeContainer}>
          <Stack>
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
          label="Required"
          defaultValue="Name"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Username"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          defaultValue="Description"
          variant="filled"
        />
          </Stack>
        </Box>
    </Container>
  )
}
