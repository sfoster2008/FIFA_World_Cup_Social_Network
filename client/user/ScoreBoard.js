import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import {Link} from 'react-router-dom'
import {findPeople, follow} from './api-user.js'
import auth from './../auth/auth-helper'
import Snackbar from 'material-ui/Snackbar'
import ViewIcon from 'material-ui-icons/Visibility'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    margin: 0
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  avatar: {
    marginRight: theme.spacing.unit * 1
  },
  follow: {
    right: theme.spacing.unit * 2
  },
  snack: {
    color: theme.palette.protectedTitle
  },
  viewButton: {
    verticalAlign: 'middle'
  }
})
class FindPeople extends Component {
  state = {
      users: [],
      open: false
  }
  componentDidMount = () => {
    const jwt = auth.isAuthenticated()
    findPeople({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({users: data})
      }
    })
  }
  clickFollow = (user, index) => {
    const jwt = auth.isAuthenticated()
    follow({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, user._id).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        let toFollow = this.state.users
        toFollow.splice(index, 1)
        this.setState({users: toFollow, open: true, followMessage: `Following ${user.name}!`})
      }
    })
  }
  handleRequestClose = (event, reason) => {
    this.setState({ open: false })
  }
  render() {
    const {classes} = this.props
    return (<div>
      
      <Paper className={classes.root} elevation={4}>
      <List>

          
 
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/GcXJ70LINvA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

     <iframe src="https://widgets.worldfootball.com/competition/440#?c_header=#4e4d4d&c_team=#95c596&columns=mp,mw,md,ml&height_unit=percent&tabs=matches&width_unit=percent" width="100%" height="1000" frameborder="0"></iframe>
      <iframe frameborder="0"  scrolling="no" width="100%" height="300" src="https://www.fctables.com/england/premier-league/iframe=/?type=top-scorers&lang_id=2&country=67&template=10&team=180231&timezone=America/Los_Angeles&time=24&limit=10&ppo=1&pte=1&pgo=1&pma=1&pas=1&ppe=1&width=520&height=700&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"></iframe>
      </List>
        

               
      </Paper>
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          onClose={this.handleRequestClose}
          autoHideDuration={6000}
          message={<span className={classes.snack}>{this.state.followMessage}</span>}
      />
    </div>)
  }
}

FindPeople.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FindPeople)
