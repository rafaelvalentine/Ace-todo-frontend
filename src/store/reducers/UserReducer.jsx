const initialState = {
  data: {
    
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_DATA':
      return { ...state,
        data: {
          ...payload
        }
      }
    default:
      return state
  }
}
