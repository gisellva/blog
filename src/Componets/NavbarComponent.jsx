import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function NavbarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FavoriteIcon  sx={{ flexGrow: 1 ,color:'white'}} />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
           Heidy Gisell Vanegas Roa
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
