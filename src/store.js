import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {coinListReducer, coinStatusReducer, coinSearchReducer} from './reducers/coinReducers'
import {holdingListReducer} from './reducers/holdingReducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  coinList: coinListReducer,
  coinSearch: coinSearchReducer,
  holdingList: holdingListReducer,
  coinStatus: coinStatusReducer
})

const perPage = 25
const offsetFromStorage = localStorage.offset ? localStorage.offset : perPage
const holdingFromStorage = localStorage.getItem('holdings') ? JSON.parse(localStorage.getItem('holdings')) : []

const initialState = {
  coinList: {
    offset: offsetFromStorage,
    perPage: perPage,
    coins: [],
  },
  coinSearch: {
    coins: [],
  },
  holdingList: {
    holdings : holdingFromStorage
  },
  coinStatus: {
    totalCount: 0,
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store