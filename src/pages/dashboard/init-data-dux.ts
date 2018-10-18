import { HomeActions } from "pages/home/home-dux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootState } from "store/rootReducer";

// This Redux Dux file will handle Initial Data Loading For Application

export interface IDashboardState {
  readonly contractData: {};
  readonly selectedContract: string | null;
  readonly etherBalance: string;
  readonly etherRates: {
    USD?: string;
    JPY?: string;
    EUR?: string;
    SGD?: string;
    CNY?: string;
    KRW?: string;
    GBP?: string;
  }
  readonly status: {
    loading?: boolean;
    success?: boolean;
    error?: boolean;
    msg?: string;
  };
}
// export const setEtheremContract = (contractID: string): Actions => {
//   return { type: "@@HOME/ETHEREUM_CONTRACT", payload: contractID };
// };

export type DashboardActions =
  | { type: "@@DASHBOARD/ETHER_BALANCE_FETCHING"; payload: any }
  | { type: "@@DASHBOARD/ETHER_BALANCE_SUCCESS"; payload: any }
  | { type: "@@DASHBOARD/ETHER_BALANCE_ERROR"; payload: any }
  | { type: "@@DASHBOARD/ETHER_RATES_FETCHING"; payload: any }
  | { type: "@@DASHBOARD/ETHER_RATES_SUCCESS"; payload: any }
  | { type: "@@DASHBOARD/ETHER_RATES_ERROR"; payload: any };

type ThunkType = ThunkAction<Promise<any>, IRootState, null, any>;
type ThunkDisp = ThunkDispatch<IRootState, void, DashboardActions>;

export const fetchEtherBalance = (contractID: string): ThunkType => {
  return async (dispatch: ThunkDisp) => {
    dispatch({ type: "@@DASHBOARD/ETHER_BALANCE_FETCHING", payload: "" });
    try {
      const result = await fetch(
        `https://api.etherscan.io/api?module=account&action=balance&address=${contractID}&tag=latest&apikey=85RPZWEIAV7IAH4YRTGZPHG68TPP2X2GCS`
      );
      const data = await result.json();
      if (data.status === "0") {
        // Invalid ID entered - Response status will be 0
        dispatch({
          type: "@@DASHBOARD/ETHER_BALANCE_ERROR",
          payload: "Error occured"
        });
      } else {
        // Parse result to store by ID
        dispatch({
          type: "@@DASHBOARD/ETHER_BALANCE_SUCCESS",
          payload: data.result
        });
      }
    } catch (e) {
      dispatch({
        type: "@@DASHBOARD/ETHER_BALANCE_ERROR",
        payload: "A server error has occured"
      });
    }
  };
};

export const fetchEtherRates = (): ThunkType => {
  return async (dispatch: ThunkDisp) => {
    dispatch({ type: "@@DASHBOARD/ETHER_RATES_FETCHING", payload: "" });
    try {
      const result = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR,SGD,CNY,KRW,GBP`
      );
      const data = await result.json();
      dispatch({
        type: "@@DASHBOARD/ETHER_RATES_SUCCESS",
        payload: data
      });
    } catch (e) {
      dispatch({
        type: "@@DASHBOARD/ETHER_RATES_ERROR",
        payload: "A server error has occured"
      });
    }
  };
};

const initialState: IDashboardState = {
  contractData: {},
  selectedContract: null,
  etherBalance: "",
  status: {
    loading: false,
    success: false,
    error: false,
    msg: ""
  },
  etherRates: {
    USD: "",
    GBP: "",
    KRW: "",
    CNY: "",
    EUR: "",
    JPY: "",
    SGD: ""
  }
};

export default (
  state = initialState,
  action: HomeActions & DashboardActions
): IDashboardState => {
  switch (action.type) {
    case "@@HOME/CONTRACT_DATA_SUCCESS":
      const selectedContract = Object.keys(action.payload);
      return {
        ...state,
        contractData: action.payload,
        selectedContract: selectedContract[0]
      };
    case "@@DASHBOARD/ETHER_BALANCE_FETCHING":
      return {
        ...state,
        status: { loading: true }
      };
    case "@@DASHBOARD/ETHER_BALANCE_SUCCESS":
      return {
        ...state,
        etherBalance: action.payload,
      };
    case "@@DASHBOARD/ETHER_BALANCE_ERROR":
      return {
        ...state,
        status: { loading: false, success: false, error: true, msg: "Error" }
      };
      case "@@DASHBOARD/ETHER_RATES_FETCHING":
      return {
        ...state,
      };
    case "@@DASHBOARD/ETHER_RATES_SUCCESS":
      return {
        ...state,
        etherRates: action.payload,
        status: { loading: false, success: true, error: false, msg: "Success" }
      };
    case "@@DASHBOARD/ETHER_RATES_ERROR":
      return {
        ...state,
        status: { loading: false, success: false, error: true, msg: "Error" }
      };
    default:
      return state;
  }
};
