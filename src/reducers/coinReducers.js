import {
  COIN_LIST_FAIL,
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_STATUS_FAIL,
  COIN_STATUS_REQUEST,
  COIN_STATUS_SUCCESS,
  COIN_SEARCH_REQUEST,
  COIN_SEARCH_SUCCESS,
  COIN_SEARCH_FAIL,
} from "../constants/coinConstants";

export const coinListReducer = (state = { coins: [] }, action) => {
  switch (action.type) {
    case COIN_LIST_REQUEST:
      return { ...state, loading: true };
    case COIN_LIST_SUCCESS:
      return { ...state, loading: false, coins: action.payload };
    case COIN_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const coinSearchReducer = (state = { coins: [] }, action) => {
  switch (action.type) {
    case COIN_SEARCH_REQUEST:
      return { ...state, loading: true };
    case COIN_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        coins: action.payload.map((x) => ({
          id: x.id,
          name: x.name,
          symbol: x.symbol,
          price: x.quote.USD.price,
        })),
      };
    case COIN_SEARCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const coinStatusReducer = (state = { coins: [] }, action) => {
  switch (action.type) {
    case COIN_STATUS_REQUEST:
      return { ...state, loading: true };
    case COIN_STATUS_SUCCESS:
      return { ...state, loading: false, totalCount: action.payload };
    case COIN_STATUS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
