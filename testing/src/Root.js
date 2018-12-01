import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "reducers";

const store = createStore(
  reducers,
  composeWithDevTools()
  // applyMiddleware(...middleware)
  // other store enhancers if any
);
export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
