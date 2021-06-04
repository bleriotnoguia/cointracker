import axios from "axios";
import {
  HOLDING_LIST_FAIL,
  HOLDING_LIST_REQUEST,
  HOLDING_LIST_SUCCESS,
  ADD_COIN_FAIL,
  ADD_COIN_REQUEST,
  ADD_COIN_SUCCESS,
  DELETE_COIN
} from "../constants/holdingConstants";

export const listHolding = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: HOLDING_LIST_REQUEST,
        });
        const config = {
            headers: {
              Accept: "application/json",
            },
          };

          const { holdingList: {holdings} } = getState()
          var holdingUpdate = []
          
          if(holdings.length){

            var listId = ''

            for (let i = 0; i < holdings.length; i++) {
                listId = listId + 'id='+holdings[i].id;
                if(i < (holdings.length - 1)){
                  listId = listId + '&'
                }
            }

            const { data } = await axios.get(
                'http://localhost:3004/coins?'+listId,
                config
              );

            var coin = {}

            holdingUpdate = holdings.map(x => {
              coin = data.find(item => item.id === x.id)
              return {
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol,
                price: coin.quote.USD.price,
                qty: x.qty
              }
            })
         }

        dispatch({
          type: HOLDING_LIST_SUCCESS,
          payload: holdingUpdate,
        });
          
    } catch (error) {
        dispatch({
          type: HOLDING_LIST_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
}

export const addCoin = (id, qty) => async (dispatch, getState) => {
  try{
    dispatch({
      type: ADD_COIN_REQUEST
    })

    const { data } = await axios.get('http://localhost:3004/coins/'+id)

    dispatch({
      type: ADD_COIN_SUCCESS,
      payload: {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        price: data.quote.USD.price,
        qty
      }
    })

    localStorage.setItem('holdings', JSON.stringify(getState().holdingList.holdings))

  } catch (error) {
    dispatch({
      type: ADD_COIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const deleteCoin = (id) => async (dispatch, getState) => {
    const {holdingList: {holdings}} = getState()

    dispatch({
      type: DELETE_COIN,
      payload: holdings.filter(x => x.id !== id)
    })

    localStorage.setItem('holdings', JSON.stringify(getState().holdingList.holdings))
}