const initialState = {
    startDate : null,
    endDate: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_SENTINEL_DATE':
        return { ...state, ...payload }

    default:
        return state
    }
}
