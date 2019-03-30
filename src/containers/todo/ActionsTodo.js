export const actionTypes = {
  UPDATE_FORM_STATE: "UPDATE_FORM_STATE"
};

export const updateFormState = payload => {
  return dispatch => {
    dispatch({
      type: actionTypes.UPDATE_FORM_STATE,
      data: payload
    });
  };
};
