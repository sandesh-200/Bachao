// Action Types
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
export const RESET_FORM = 'RESET_FORM';
export const SET_LOADING = 'SET_LOADING';
export const UPDATE_FORM = 'UPDATE_FORM';

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      };
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false
      };
    case RESET_FORM:
      return {
        ...state,
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        success: false,
        error: null
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_FORM:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default contactReducer;
