import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import rootReducer from "./rootReducer";

export default function configureStore() {
  const store = createStore(rootReducer, compose(applyMiddleware(ReduxThunk)));
  return store;
}
