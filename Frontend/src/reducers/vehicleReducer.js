const initialState = {
    message: '',
    vehicles: [],
    vehicle: []
}

const vehicleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_VEHICLES":
            return { ...state, vehicles: payload };
        default:
            return state
    }
}

export default vehicleReducer;