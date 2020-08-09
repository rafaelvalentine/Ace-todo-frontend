const initialState = {
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TODO_LIST':
      return { ...state,
        data: [
          ...payload
        ]
      }

    default:
      return state
  }
}
