import authHeader from "../services/auth-header";

export const _fetchActiveBookings = (payload) => {
    return { type: 'FETCH_ACTIVE_BOOKINGS', payload: payload };
  };
  
  export const fetchActiveBookings = () => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return (dispatch) => {
      fetch('http://localhost:8081/api/v1/activeBookings', requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(_fetchActiveBookings(data));
        });
    };
  };

  export const _fetchBookingByDate = (payload) => {
    return { type: 'VIEW_ACTIVE_BOOKING_DATE', payload: payload };
  };

  export const fetchActiveBookingByDate = (date) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return (dispatch) => {
      fetch('http://localhost:8081/api/v1/activeBookings/' + date, requestOptions)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            console.log('Error');
          }
        })
        .then((data) => {
          dispatch(_fetchBookingByDate(data));
        })
        .catch((err) => {
          console.warn(err);
        });
    };
  };
  
  export const fetchActiveBookingByDateBoth = (from, to) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return (dispatch) => {
      fetch('http://localhost:8081/api/v1/activeBookings/' + from + '/' + to, requestOptions)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            console.log('Error');
          }
        })
        .then((data) => {
          dispatch(_fetchBookingByDate(data));
        })
        .catch((err) => {
          console.warn(err);
        });
    };
  };