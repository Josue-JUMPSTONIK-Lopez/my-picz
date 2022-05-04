import React from 'react'
import { Box, Container, TextField, Input, Button} from '@mui/material'
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { dummyAlbums } from '../../utils/dummyData';


export const UploadPhoto = () => {
    return (
        <Container>
            <Box sx={styles.EditUserInfo}>
            <Box sx={styles.Form}>
                <Box sx={styles.btnReturnEditUser}>
                <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/creates'/>
                </Box>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                </label>
                <TextField
                id="filled-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                variant="filled"
                sx={{width: '100%'}}
                />
                <Box sx={{
                    width: '400px',
                    height: '200px',
                    overflow: 'scroll'
                }}>
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {dummyAlbums.map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value.id}`;
                            return (
                            <ListItem
                                key={value.id}
                                secondaryAction={
                                <Checkbox
                                    edge="end"
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                <ListItemText id={labelId} primary={value.name} />
                                </ListItemButton>
                            </ListItem>
                            );
                        })}
                    </List>
                </Box>
                <Button variant='contained'>Upload</Button>
            </Box>
            </Box>
        </Container>
    )
}
