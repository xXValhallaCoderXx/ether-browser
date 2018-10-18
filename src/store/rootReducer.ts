import { combineReducers } from "redux";
import homeReducer, {IHomeState} from "pages/home/home-dux";
import initDashboardReducer, {InitDashbardState} from "pages/dashboard/init-data-dux";
import dashboardRedcuer, {IDashboardState} from "pages/dashboard/dashboard-dux";
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