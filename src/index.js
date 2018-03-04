/* <------------REACT MODULES------------> */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

/* <------------REDUX MODULES------------> */
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import decode from "jwt-decode";
import thunk from "redux-thunk";

/* <------------REDUCERS------------> */
import rootReducer from "./rootReducer";

/* <------------ACTIONS------------> */
import { userLoggedIn } from "./actions/auth";

/* <------------UTILITIES------------> */
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

/* <------------COMPONENTS------------> */
import App from "./App";

/* <------------STYLES------------> */
import "./css/Global.css";
import "./css/fontawesome-all";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
if (localStorage.castorAppJWT) {
  const payload = decode(localStorage.castorAppJWT);
  const user = {
    token: localStorage.castorAppJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.castorAppJWT);
  store.dispatch(userLoggedIn(user));
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
