import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/FIFA_World_Cup.jpg'
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import ScoreBoard from './../user/ScoreBoard'
import LiveScores from './../user/LiveScores'
import PlaceHolder from './../user/PlaceHolder'
import Newsfeed from './../post/Newsfeed'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Home extends Component {
  state = {
    defaultPage: true
  }
  init = () => {
    if(auth.isAuthenticated()){
      this.setState({defaultPage: false})
    }else{
      this.setState({defaultPage: true})
    }
  }
  componentWillReceiveProps = () => {
    this.init()
  }
  componentDidMount = () => {
    this.init()
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography type="headline" component="h2" className={classes.title}>
                Welcome to the 2018 FIFA WORLD CUP™ SOCIAL
                </Typography>
                <CardMedia className={classes.media} image={seashellImg} title="GOOOOOOAAAAAALLLLLLLL!!!!"/>
                <CardContent>
                  <Typography type="body1" component="p">
                  Mission: Give Soccer Fans the power to build community and bring the office or classroom closer together. Fans use this social app. to stay connected with friends and family, to discover what's going on in the FIFA World Cup, and to share and express what matters to them.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        }
        {!this.state.defaultPage &&
          <Grid container spacing={24}>
                 <Grid item xs={12} sm={12}>
              <LiveScores/>
            </Grid>
                 
              

           <Grid item xs={12} sm={4}>
              <ScoreBoard/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
