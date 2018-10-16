import { combineReducers } from "redux";
import homeReducer, {IHomeState} from "pages/home/home-dux";

export interface IAppState {
  home: IHomeState
}

export default combineReducers<IAppState>({
  home: homeReducer
});