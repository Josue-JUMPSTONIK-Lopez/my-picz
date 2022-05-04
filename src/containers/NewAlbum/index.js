import React from 'react'
import { Box, Container, TextField, Button, Typography} from '@mui/material'
import { styles } from '../../utils/styles';
import { NavigateButton } from '../../components/NavigateButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { dummyData } from '../../utils/dummyData';

export const NewAlbum = () => {

    return (
        <Container>
            <Box sx={styles.EditUserInfo}>
            <Box sx={styles.Form}>
                <Box sx={styles.btnReturnEditUser}>
                <NavigateButton btnColor1='#7D506B' btnColor2='#906D89' content='return' path='/creates'/>
                </Box>
                <Typography>Create your new album</Typography>
                <TextField
                required
                id="filled-required"
                label="Name"
                variant="filled"
                sx={{width: '100%'}}
                />
                <Box sx={styles.OptionsNewAlbum}>
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {dummyData.map((value) => {
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
                                <ListItemAvatar>
                                    <Avatar
                                    alt={`img #${value.id}`}
                                    src={value.img}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`photo ${value.id}`} />
                                </ListItemButton>
                            </ListItem>
                            );
                        })}
                    </List>
                </Box>
                <Button variant='contained'>Create Album</Button>
            </Box>
            </Box>
        </Container>
    )
}
