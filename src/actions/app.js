import api from "../api";
import { APP_LOADING, APP_MENU_TOGGLE, CHANGE_MENU_ITEM } from "../types";

export const setLoading = boolean => ({
  type: APP_LOADING,
  loading: boolean
});

export const loading = boolean => dispatch => {
  dispatch(setLoading(boolean));
};
export const menuOpen = boolean => ({
  type: APP_MENU_TOGGLE,
  menuOpen: boolean
});

export const toggleMenu = boolean => dispatch => {
  dispatch(menuOpen(boolean));
};
export const activeItem = value => ({
  type: CHANGE_MENU_ITEM,
  activeItem: value
});

export const changeMenuItem = value => dispatch => {
  dispatch(activeItem(value));
};
