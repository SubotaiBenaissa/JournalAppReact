import { Box } from '@mui/material'
import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

    return (
        
        <Box sx={{ display: 'flex' }}>
            <NavbarComponent drawerWidth={ drawerWidth }/>
            <Box 
                component="main"
                sx={{ flexGrow: 1, p: 2 }}
            >
                { children }
            </Box>
        </Box>

    )

}
