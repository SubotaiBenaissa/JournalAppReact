import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { SidebarComponent, NavbarComponent } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

    return (
        
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
            <NavbarComponent drawerWidth={ drawerWidth }/>
            <SidebarComponent drawerWidth={ drawerWidth } />
            <Box 
                component="main"
                sx={{ flexGrow: 1, p: 2 }}
            >
                <Toolbar />
                { children }
            </Box>
        </Box>

    )

}
