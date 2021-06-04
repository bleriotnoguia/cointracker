import {
  UPDATE_THEME_REQUEST,
  UPDATE_HOLDING_PRIVACY
} from "../constants/settingConstants";

export const settingListReducer = (state = { isDarkMode: false, isPrivate: false }, action) => {
  switch (action.type) {
    case UPDATE_THEME_REQUEST:
      return { ...state, isDarkMode: action.payload };
    case UPDATE_HOLDING_PRIVACY:
      return { ...state, isPrivate: action.payload };
    default:
      return state;
  }
};