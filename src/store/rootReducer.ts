import { combineReducers } from "redux";
import homeReducer, {IHomeState} from "pages/home/home-dux";
import dashboardReducer, {IDashboardState} from "pages/dashboard/dashboard-dux";
export interface IRootState {
  home: IHomeState,
  dashboard: IDashboardState
}

export default combineReducers<IRootState>({
  home: homeReducer,
  dashboard: dashboardReducer
});