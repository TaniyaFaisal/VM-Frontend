import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  container: {
    width: 'auto',
  },
}));


export const ActiveBookingNavBar = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        style={{ backgroundColor: 'ghostwhite ', color: 'black' }}
      >
        <Toolbar>
          <Link to='/viewActiveBooking' style={{ textDecoration: 'none' }}>
            <Button
              style={{ margin: '10px' }}
              variant='contained'
              color='primary'
            >
              View Active Bookings
            </Button>
          </Link>
          <Link to='/viewActiveBookingDate' style={{ textDecoration: 'none' }}>
            <Button
              style={{ margin: '10px' }}
              variant='contained'
              color='primary'
            >
              View Active Booking By Booking Date
            </Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const ActiveBookingNavBarDate = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        style={{ backgroundColor: 'ghostwhite ', color: 'black' }}
      >
        <Toolbar>
          <Link to='/viewActiveBooking' style={{ textDecoration: 'none' }}>
            <Button
              style={{ margin: '10px' }}
              variant='contained'
              color='primary'
            >
              View Active Bookings
            </Button>
          </Link>
          <Link to='/viewActiveBookingDate' style={{ textDecoration: 'none' }}>
            <Button
              style={{ margin: '10px' }}
              variant='contained'
              color='primary'
            >
              View Active Booking By Date
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
