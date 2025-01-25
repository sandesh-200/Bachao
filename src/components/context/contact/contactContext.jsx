import React, { createContext, useReducer } from 'react';
import contactReducer from './contactReducer.js';
import { sendContactMessage, resetForm, setLoading } from './contactActions.js';

const ContactContext = createContext();

const initialState = {
  formData: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  isLoading: false,
  error: null,
  success: false
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Actions
  const handleSendMessage = async (formData) => {
    return await sendContactMessage(dispatch, formData);
  };

  const handleResetForm = () => {
    resetForm(dispatch);
  };

  const handleSetLoading = () => {
    setLoading(dispatch);
  };

  const handleSetFormData = (newData) => {
    dispatch({
      type: 'UPDATE_FORM',
      payload: newData
    });
  };

  return (
    <ContactContext.Provider
      value={{
        formData: state.formData,
        isLoading: state.isLoading,
        error: state.error,
        success: state.success,
        sendMessage: handleSendMessage,
        resetForm: handleResetForm,
        setLoading: handleSetLoading,
        setFormData: handleSetFormData
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
