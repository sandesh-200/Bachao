export const initialState = {
  disasters: [],
  loading: false,
  error: null,
}

export const disasterReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DISASTERS_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_DISASTERS_SUCCESS":
      return {
        ...state,
        loading: false,
        disasters: action.payload,
      }
    case "FETCH_DISASTERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

