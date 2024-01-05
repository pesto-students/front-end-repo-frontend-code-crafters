// reducers/vegetablesReducer.js
import { SET_VEGETABLES_DATA } from '../actions/vegetablesActions';

const initialState = {
  vegetablesData: [],
  // Add more initial state properties as needed
};

const vegetablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEGETABLES_DATA:
      return {
        ...state,
        vegetablesData: action.payload,
      };
    // Handle other actions and update state accordingly
    default:
      return state;
  }
};

export default vegetablesReducer;
