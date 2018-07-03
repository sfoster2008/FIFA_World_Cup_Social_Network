import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import Button from 'material-ui/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ffffff'}
  else
    return {color: '#ffffff'}
}
const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
      2018 FIFA WORLD CUP™ SOCIAL
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Locker</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.signout(() => history.push('/'))
            }}>Sign out</Button>
        
        </span>)
      }

      <Button size="medium" color="inherit" href="https://www.fifa.com/worldcup/">
      FIFA WORLD CUP™ Website
          </Button>
          <Button size="medium" color="inherit" href="http://fcpredictor.espn.com/us/clienthome.do">
      ESPN Match Predictor 2018
          </Button>
          <Button size="medium" color="inherit" href="https://www.foxsports.com/soccer/fifa-world-cup">
          Stream on FOX Sports
          </Button>
          <Button size="medium" color="inherit" href="http://livescore-api.com/worldcup/">
          Livescore API World Cup 2018 
          </Button>
          <Button size="medium" color="inherit" href="https://github.com/lsv/fifa-worldcup-2018">
          GITHUB JSON DATA
          </Button>
    </Toolbar>
  </AppBar>
))

export default Menu
