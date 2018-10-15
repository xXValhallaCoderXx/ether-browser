import { createStore, compose, applyMiddleware, Store } from "redux";
import { IAppState } from "./rootReducer";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";

export default function configureStore(
  initialState: IAppState
): Store<IAppState> {
  const store = createStore(rootReducer, compose(applyMiddleware(logger)));
  return store;
}
