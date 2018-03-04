import { APP_LOADING, APP_MENU_TOGGLE, CHANGE_MENU_ITEM } from "../types";

export default function app(state = {}, action = {}) {
  switch (action.type) {
    case APP_LOADING:
      return { loading: action.loading };
    case APP_MENU_TOGGLE:
      return { menuOpen: action.menuOpen };
    case CHANGE_MENU_ITEM:
      return { activeItem: action.activeItem };
    default:
      return state;
  }
}
