import {
  UPDATE_THEME_REQUEST,
  UPDATE_HOLDING_PRIVACY
} from "../constants/settingConstants";

export const updateTheme = () => async (dispatch, getState) => {
  const {settings: {isDarkMode}} = getState()

  dispatch({
    type: UPDATE_THEME_REQUEST,
    payload: !isDarkMode
  })

  localStorage.isDarkMode = getState().settings.isDarkMode

  if(JSON.parse(localStorage.isDarkMode)){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const updatePrivacy = () => async (dispatch, getState) => {
  const {settings: {isPrivateMode}} = getState()

  dispatch({
    type: UPDATE_HOLDING_PRIVACY,
    payload: !isPrivateMode
  })
  
  localStorage.isPrivateMode = getState().settings.isPrivateMode
}