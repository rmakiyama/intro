export default function formReducer(state = {}, action) {
  switch(action.type) {
    case 'SEND_NAME':
      return Object.assign({}, state, {
        sei: "",
        mei: "",
        isDisabled: true,
      });
    case 'INPUT_SEI':
      return Object.assign({}, state, {
        sei: action.sei,
        isDisabled: !(action.sei && state.mei),
      });
    case 'INPUT_MEI':
      return Object.assign({}, state, {
        mei: action.mei,
        isDisabled: !(state.sei && action.mei),
      });
    default:
      return state;
  }
}