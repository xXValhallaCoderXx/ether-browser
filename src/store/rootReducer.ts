import { combineReducers } from "redux";
import homeReducer, {InitialStateHome} from "pages/home/home-dux";

export interface IAppState {
  home: InitialStateHome
}

export default combineReducers<IAppState>({
  home: homeReducer
});