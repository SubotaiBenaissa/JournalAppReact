import { TurnedInNot } from '@mui/icons-material'
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const SidebarComponent = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector( state => state.auth );

    return (
        <Box 
            component="nav"
            sx={{width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Hola', 'Cola', 'Bola', 'Tola'].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text }/> 
                                        <ListItemText secondary={ 'Subtexto explicativo de list item' }/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
    
}
