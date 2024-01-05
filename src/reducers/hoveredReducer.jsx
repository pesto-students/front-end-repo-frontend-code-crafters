// reducers/hoveredReducer.js
const initialState = {
    hoveredIndex: null,
  };
  
  const hoveredReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HOVERED_INDEX':
        return {
          ...state,
          hoveredIndex: action.payload,
        };
      case 'CLEAR_HOVERED_INDEX':
        return {
          ...state,
          hoveredIndex: null,
        };
      default:
        return state;
    }
  };
  
  export default hoveredReducer;
  