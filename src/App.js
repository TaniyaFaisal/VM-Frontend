import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, Route, Router, Switch } from "react-router-dom";
import React, { Component } from "react";

import AddBooking from "./components/bookingComponents/AddBooking";
import AppBar from '@material-ui/core/AppBar';
import Dashboard from "./components/commonComponents/Dashboard";
import DetailViewBooking from "./components/bookingComponents/DetailViewBooking";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import Register from "./components/register.component";
import { TemporaryDrawer } from "./components/commonComponents/Menu";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UpdateBooking from "./components/bookingComponents/UpdateBooking";
import ViewBookings from "./components/bookingComponents/ViewBookings";
import { clearMessage } from "./actions/message";
import { connect } from "react-redux";
import { history } from './helpers/history';
import { logout } from "./actions/auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          <AppBar position="static">
            <Toolbar>
              <TemporaryDrawer />
              <Typography variant="h5"><Link to={"/"} style={{ color: 'white' }}>
                Vehicle Management Application
            </Link></Typography>

              {showAdminBoard && (
                <Typography variant="h6" style={{ margin: "10px" }}>
                  <Link to={"/dashboard"} style={{ color: 'white' }}>
                    Admin Board
                  </Link>
                </Typography>
              )}

              {currentUser && (
                <Typography variant="h6" style={{ margin: "10px" }}>
                  <Link to={"/user"} style={{ color: 'white' }}>
                    User
                  </Link>
                </Typography>
              )}


              {currentUser ? (
                <div style={{marginLeft:'auto'}}>
              <Typography variant="h6" style={{ margin: "10px" }}>
                  <Link to={"/profile"} style={{ color: 'white' }}>
                    {currentUser.username}
                  </Link>
                </Typography>
                <Typography variant="h6" style={{ margin: "10px" }}>
                  <a href="/login" style={{ color: 'white' }} onClick={this.logOut}>
                    LogOut
                  </a>
                </Typography>
                </div>
              ) : (
                <div style={{marginLeft:'auto'}}>
              <Typography variant="h6" style={{ margin: "10px" }}>
                    <Link to={"/login"} style={{ color: 'white' }}>
                      Login
                  </Link>
                  </Typography>

              <Typography variant="h6" style={{ margin: "10px" }}>
                    <Link to={"/register"} style={{ color: 'white' }}>
                      Sign Up
                  </Link>
                  </Typography>
                  </div>
                )}
            </Toolbar>
          </AppBar>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/viewBooking">
                <ViewBookings />
              </Route>
              <Route path="/addBooking">
                <AddBooking />
              </Route>
              <Route path="/updateBooking/:id" component={UpdateBooking} />
              <Route path="/detailViewBooking/:id" component={DetailViewBooking} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
