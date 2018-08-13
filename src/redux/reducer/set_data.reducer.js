const SET_DATA= "SET_DATA";
export default function data_reducer(state ={} , { type, pyload }) {
  switch (type) {
    case SET_DATA:
	  return pyload;
    default:
      return state;
  }
}

export function set_data(value) {
  return {
    type: SET_DATA,
    pyload: value
  };
}