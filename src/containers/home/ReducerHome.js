export default function homeReducer(
  state = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false,
    formState: {
      firstName: "",
      lastName: ""
    }
  },
  action
) {
  switch (action.type) {
    case "UPDATE_FORM_STATE":
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.propPath]: action.data
        }
      };
    case "INCREMENT_REQUESTED":
      return {
        ...state,
        isIncrementing: true
      };

    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case "DECREMENT_REQUESTED":
      return {
        ...state,
        isDecrementing: true
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
}
