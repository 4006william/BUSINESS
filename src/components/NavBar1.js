import React from 'react';
import auth from '../auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default function NavBar1() {

  return (
    <div class="landing1">
      <AppBar class="bar1" position="static">
        <Toolbar>
          <IconButton edge="start" class="icon1" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" class="title1">
            Houston Restaurants
          </Typography>
          <Button id="listings1" class="btn1">Listings</Button>
          <Button onClick={
            () =>{
              console.log('test')
                  auth.login(() => {
                    window.location = '/login'
                  })
            }
          }id="login1" class="btn1">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}