const initialState = {
  selected: {},
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TODO':
      return {
        ...state,
        selected: {
          ...payload
        }
      }
    case 'SET_ALL_TODOS':
      return {
        ...state,
        data: [
          ...payload
        ]
      }

    default:
      return state
  }
}
