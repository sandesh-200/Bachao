import axios from 'axios';
import { toast } from 'sonner';

const API_URL = "http://localhost:5000/api";

export const sendContactMessage = async (dispatch, formData) => {
  try {
    dispatch({ type: 'SEND_MESSAGE' });

    const response = await axios.post(`${API_URL}/contacts`, formData);

    if (response.data.success) {
      dispatch({ type: 'SEND_MESSAGE_SUCCESS' });
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      });
      return true;
    } else {
      throw new Error(response.data.message || 'Failed to send message');
    }
  } catch (error) {
    dispatch({
      type: 'SEND_MESSAGE_ERROR',
      payload: error.message
    });
    toast.error(error.message || "Failed to send message. Please try again later.");
    return false;
  }
};

export const resetForm = (dispatch) => {
  dispatch({ type: 'RESET_FORM' });
};

export const setLoading = (dispatch) => {
  dispatch({ type: 'SET_LOADING' });
};
