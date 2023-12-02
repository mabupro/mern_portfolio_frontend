import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const DefaultHeader = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#483d8b' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#fff',
                        fontWeight: 'bold'
                    }}
                >
                    mabupro TecBlog
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
