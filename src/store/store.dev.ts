import { createStore, compose, applyMiddleware, Store } from "redux";
import ReduxThunk from 'redux-thunk';
import { IRootState } from "./rootReducer";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";

export default function configureStore(
  initialState: IRootState
): Store<IRootState> {
  const store = createStore(rootReducer, compose(applyMiddleware(logger, ReduxThunk)));
  return store;
}
