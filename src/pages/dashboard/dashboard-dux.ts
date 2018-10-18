import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootState } from "store/rootReducer";

// This Redux Dux file will handle Initial Data Loading For Application

export interface IDashboardState {
  readonly selectedCurrency: string;
}

export type DashboardActions = {
  type: "@@DASHBOARD/SELECT_CURRENCY";
  payload: any;
};

type ThunkType = ThunkAction<Promise<any>, IRootState, null, any>;
type ThunkDisp = ThunkDispatch<IRootState, void, DashboardActions>;

export const setCurrency = (currency: string): DashboardActions => {
  return { type: "@@DASHBOARD/SELECT_CURRENCY", payload: currency };
};

const initialState: IDashboardState = {
  selectedCurrency: "USD"
};

export default (
  state = initialState,
  action: DashboardActions
): IDashboardState => {
  switch (action.type) {
    case "@@DASHBOARD/SELECT_CURRENCY":
      return {...state, selectedCurrency: action.payload}
    default:
      return state;
  }
};
