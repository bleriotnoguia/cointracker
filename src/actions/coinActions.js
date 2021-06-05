import axios from "axios";
import {
  COIN_LIST_REQUEST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAIL,
  COIN_STATUS_REQUEST,
  COIN_STATUS_SUCCESS,
  COIN_STATUS_FAIL,
  COIN_SEARCH_REQUEST,
  COIN_SEARCH_SUCCESS,
  COIN_SEARCH_FAIL,
} from "../constants/coinConstants";

export const listCoins = (new_offset) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COIN_LIST_REQUEST,
    });
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    var { coinList: {offset} } = getState();
    
    if(new_offset){
        offset = new_offset
        localStorage.offset = new_offset
    }
    const { coinList: {perPage} } = getState();
    const { data } = await axios.get(
      `${window.url_api}/coins?_start=${offset - perPage}&_end=${offset}`,
      config
    );
    dispatch({
        type: COIN_LIST_SUCCESS,
        payload: data,
    });
  } catch (error) {
    dispatch({
      type: COIN_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCoinStatus = () => async (dispatch) => {
    try{
        dispatch({
            type: COIN_STATUS_REQUEST,
        });
        const config = {
            headers: {
              Accept: "application/json",
            },
          };
      
          const { data } = await axios.get(
            window.url_api+'/status',
              config
            );
          dispatch({
              type: COIN_STATUS_SUCCESS,
              payload: data.total_count,
          });
    } catch (error) {
        dispatch({
          type: COIN_STATUS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
}

export const searchCoin = (text) => async (dispatch) => {
  try{
    dispatch({
      type: COIN_SEARCH_REQUEST,
    });

    var myResponse

    if(text){
      const { data } = await axios.get(window.url_api+'/coins?name_like='+text)
      myResponse = data
    }else{
      const { data } = await axios.get(window.url_api+'/coins?_start=0&_limit=4')
      myResponse = data
    }

    dispatch({
      type: COIN_SEARCH_SUCCESS,
      payload: myResponse
    })
  } catch (error) {
    dispatch({
      type: COIN_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}