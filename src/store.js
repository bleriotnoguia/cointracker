import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {coinListReducer, coinStatusReducer, coinSearchReducer} from './reducers/coinReducers'
import {holdingListReducer} from './reducers/holdingReducers'
import {settingListReducer} from './reducers/settingReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  settings: settingListReducer,
  coinList: coinListReducer,
  coinSearch: coinSearchReducer,
  holdingList: holdingListReducer,
  coinStatus: coinStatusReducer
})

if (
  (!("isDarkMode" in localStorage) &&
  window.matchMedia("(prefers-color-scheme: dark)").matches) || (("isDarkMode" in localStorage) && JSON.parse(localStorage.isDarkMode) === true)
) {
  localStorage.isDarkMode = true;
  document.documentElement.classList.add("dark");
}

const perPage = 25
const isDarkModeFromStorage = localStorage.isDarkMode ? JSON.parse(localStorage.isDarkMode) : false
const isPrivateModeFromStorage = localStorage.isPrivateMode ? JSON.parse(localStorage.isPrivateMode) : false
const offsetFromStorage = localStorage.offset ? localStorage.offset : perPage
const holdingFromStorage = localStorage.getItem('holdings') ? JSON.parse(localStorage.getItem('holdings')) : []

const initialState = {
  settings: {
    isDarkMode: isDarkModeFromStorage,
    isPrivateMode: isPrivateModeFromStorage
  },
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