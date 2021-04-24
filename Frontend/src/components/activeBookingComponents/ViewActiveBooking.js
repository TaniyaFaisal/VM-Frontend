import * as actions from '../../actions/activeBookingAction';

import {
Paper,
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
} from '@material-ui/core';
import React, { Component } from 'react';

import { ActiveBookingNavBar } from './ActiveBookingNavBar';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';

class ViewActiveBookings extends Component {
  constructor() {
    super();
    this.state = { bookings: [], message: '', displayAlert: false };
  }

  componentDidMount() {
    this.props.onFetchBookings();
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.props.message
        ? this.setState({ displayAlert: true })
        : this.setState({ displayAlert: false });
    }
  }

 

  render() {
    return (
      <div>
        <ActiveBookingNavBar />
        {this.state.displayAlert && (
          <Alert
            variant='filled'
            severity={
              this.props.message.includes('Successfully') ? 'success' : 'error'
            }
            style={{ justifyContent: 'center' }}
          >
            {this.props.message}
          </Alert>
        )}
        <br></br>
        <br></br>
        <TableContainer component={Paper}>
          <Table aria-label='customized table'>
            <TableHead>
              <TableRow style={{ color: '#3f51b5', fontSize: 'medium' }}>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  #
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Customer Name
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Vehicle Number
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Booking Date
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Booked Till Date
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Booking Desc
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Distance
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: '#3f51b5', fontSize: 'medium' }}
                >
                  Total Cost
                </TableCell>
              </TableRow>
            </TableHead>
            {this.props && this.props.bookings && (
              <TableBody>
                {this.props.bookings.map((booking, i) => (
                  <TableRow key={i}>
                    <TableCell component='th' scope='row'>
                      {i + 1}
                    </TableCell>
                    <TableCell align='center'>
                      {booking.customer.firstName} {booking.customer.lastName}
                    </TableCell>
                    <TableCell align='center'>
                      {booking.vehicle.vehicleNumber}
                    </TableCell>
                    <TableCell align='center'>{booking.bookingDate}</TableCell>
                    <TableCell align='center'>
                      {booking.bookedTillDate}
                    </TableCell>
                    <TableCell align='center'>
                      {booking.bookingDescription}
                    </TableCell>
                    <TableCell align='center'>{booking.distance}</TableCell>
                    <TableCell align='center'>{booking.totalCost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    bookings: state.activeBookingsData.activeBookings,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onFetchBookings: () => dispatch(actions.fetchActiveBookings()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ViewActiveBookings);
