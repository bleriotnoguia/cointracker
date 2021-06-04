import {
  HOLDING_LIST_FAIL,
  HOLDING_LIST_REQUEST,
  HOLDING_LIST_SUCCESS,
  ADD_COIN_SUCCESS,
  ADD_COIN_FAIL,
  DELETE_COIN
} from "../constants/holdingConstants";

export const holdingListReducer = (state = { holdings: [] }, action) => {
  switch (action.type) {
    case HOLDING_LIST_REQUEST:
      return { ...state, loading: true };
    case HOLDING_LIST_SUCCESS:
      return { ...state, loading: false, holdings: action.payload };
    case HOLDING_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_COIN_SUCCESS:
      const item = action.payload
      const existItem = state.holdings.find(elt => elt.id === item.id)
      if(existItem){
        return { 
          ...state, 
          holdings: state.holdings.map(x => x.id === existItem.id ? item : x) 
        }
      }else{
        return {
          ...state,
          holdings: [...state.holdings, item]
        }
      }
    case DELETE_COIN:
      return {holdings: action.payload}
    case ADD_COIN_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};