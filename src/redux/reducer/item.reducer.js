const GENERIC_CITY = "GENERIC_CITY";
const initialState = [];
export default function itemReducer(state = initialState, { type, pyload }) {
  switch (type) {
    case GENERIC_CITY:
	  return pyload;
    default:
      return state;
  }
}

export function itemUpdate(value) {
  return {
    type: GENERIC_CITY,
    pyload: value
  };
}