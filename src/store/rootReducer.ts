import { combineReducers } from "redux";
import homeReducer, {IHomeState} from "pages/home/dux-home";
import initDashboardReducer, {InitDashbardState} from "pages/dashboard/dux-init-data";
import dashboardRedcuer, {IDashboardState} from "pages/dashboard/dux-dashboard";
export interface IRootState {
  home: IHomeState,
  initDashboard: InitDashbardState,
  dashboard: IDashboardState
}

export default combineReducers<IRootState>({
  home: homeReducer,
  initDashboard: initDashboardReducer,
  dashboard: dashboardRedcuer
});