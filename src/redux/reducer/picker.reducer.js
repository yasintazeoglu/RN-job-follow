const RETURN_PICKER = "RETURN_PICKER";
export default function pickerReducer(state = {}, { type, pyload }) {
  switch (type) {
    case RETURN_PICKER:
      return {...state,...pyload};
    default:
      return state;
  }
}

export function return_picker(value) {
  return {
    type: RETURN_PICKER,
    pyload: value
  };
}
