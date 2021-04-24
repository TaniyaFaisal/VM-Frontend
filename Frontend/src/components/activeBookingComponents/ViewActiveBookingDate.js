import './ViewActiveBookingDate.css';

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React, { useRef } from 'react';
import {
  fetchActiveBookingByDate,
  fetchActiveBookingByDateBoth,
} from '../../actions/activeBookingAction';
import { useDispatch, useSelector } from 'react-redux';

import { ActiveBookingNavBarDate } from './ActiveBookingNavBar';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

var value = new Date();
function ViewActiveBookingDate() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.activeBookingsData.activeBookings);
  const dateRef = useRef();
  const fromRef = useRef();
  const toRef = useRef();

  const handleDateSearch = (e) => {
    console.log(dateRef.current.value);
    dispatch(fetchActiveBookingByDate(dateRef.current.value));
  };

  const handleDateSearchBoth = (e) => {
    console.log(fromRef.current.value);
    console.log(toRef.current.value);
    dispatch(
      fetchActiveBookingByDateBoth(fromRef.current.value, toRef.current.value)
    );
  };
  return (
    <div>
      <ActiveBookingNavBarDate />
      <div className='container'>
        <div className='items'>
          <form className='form1'>
            <FormLabel className='item'>Date:</FormLabel>
            <TextField
              id='date'
              type='date'
              defaultValue={value.toLocaleDateString('fr-CA')}
              InputLabelProps={{
                shrink: true,
              }}
              className='item'
              inputRef={dateRef}
            />
            <div className='item'>
              <Button
                variant='contained'
                onClick={handleDateSearch}
                color='secondary'
              >
                Search
              </Button>
            </div>
          </form>
          <p className='subtitle fancy'>
            <span>OR</span>
          </p>
          <form className='form1'>
            <FormLabel className='item'>From :</FormLabel>
            <TextField
              id='date'
              type='date'
              defaultValue={value.toLocaleDateString('fr-CA')}
              InputLabelProps={{
                shrink: true,
              }}
              className='item'
              inputRef={fromRef}
            />
            <FormLabel className='item'>To :</FormLabel>
            <TextField
              id='date'
              type='date'
              defaultValue={value.toLocaleDateString('fr-CA')}
              InputLabelProps={{
                shrink: true,
              }}
              className='item'
              inputRef={toRef}
            />
            <div className='item'>
              <Button
                variant='contained'
                onClick={handleDateSearchBoth}
                color='secondary'
              >
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className='items'>
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
              {bookings && bookings && (
                <TableBody>
                  {bookings.map((booking, i) => (
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
                      <TableCell align='center'>
                        {booking.bookingDate}
                      </TableCell>
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
      </div>
    </div>
  );
}

export default ViewActiveBookingDate;
