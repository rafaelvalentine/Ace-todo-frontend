const initialState = {
  data: [],
  selected: {
    id: null, 
    title: null
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TODO_LIST':
      return { ...state,
        data: [
          ...payload
        ]
      }

    case 'SET_TASK_ID':
      return { ...state,
        selected: payload
      }
      
    default:
      return state
  }
}
