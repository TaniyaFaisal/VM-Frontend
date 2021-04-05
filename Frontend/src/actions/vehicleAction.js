import authHeader from "../services/auth-header";

export const _fetchVehicles = (payload) => {
    return { type: "FETCH_VEHICLES", payload: payload }
}

export const fetchVehicles = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return dispatch => {
        fetch('http://localhost:8081/api/v1/viewAllVehicles', requestOptions)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch(_fetchVehicles(data));
            })
    }
}