const SET_DATA_CONTROL= "SET_DATA_CONTROL";
export default function data_reducer(state =false, { type}) {
  switch (type) {
    case SET_DATA_CONTROL:
	  return true;
    default:
      return state;
  }
}

export function set_data_control() {
  return {
    type: SET_DATA_CONTROL,
  };
}