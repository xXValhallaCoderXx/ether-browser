import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootState } from "store/rootReducer";
import { validateForm, parseResult } from "./utils";

import history from 'shared/history';

export interface IHomeState {
  readonly loading: boolean;
  readonly error: boolean;
  readonly success: boolean;
  readonly msg: string;
}

export type HomeActions =
  | { type: "@@HOME/CONTRACT_DATA_FETCHING", payload: string }
  | { type: "@@HOME/CONTRACT_DATA_SUCCESS", payload: object }
  | { type: "@@HOME/CONTRACT_DATA_FAILED", payload: string };

type ThunkType = ThunkAction<Promise<any>, IRootState, null, any>;
type ThunkDisp = ThunkDispatch<IRootState, void, HomeActions>;

export const fetchContractData = (contractID: string): ThunkType => {
  return async (dispatch: ThunkDisp) => {
    // Handle Form Validation
    try {
      await validateForm(contractID);
    } catch (e) {
      return dispatch({
        type: "@@HOME/CONTRACT_DATA_FAILED",
        payload: e.data
      });
    }

    dispatch({ type: "@@HOME/CONTRACT_DATA_FETCHING", payload: "" });
    try {
      const result = await fetch(
        `http://api.etherscan.io/api?module=account&action=txlist&address=${contractID}&startblock=0&endblock=99999999&sort=asc&apikey=85RPZWEIAV7IAH4YRTGZPHG68TPP2X2GCS`
      );
      const data = await result.json();
      if (data.status === "0") {
        // Invalid ID entered - Response status will be 0
        dispatch({ type: "@@HOME/CONTRACT_DATA_FAILED", payload: data.result });
      } else {
        // Parse result to store by ID
        const result = await parseResult(contractID, data.result);
        dispatch({ type: "@@HOME/CONTRACT_DATA_SUCCESS", payload: result });
        history.push(`/address/${contractID}`)
      }
    } catch (e) {
      dispatch({
        type: "@@HOME/CONTRACT_DATA_FAILED",
        payload: "A server error has occured"
      });
    }
  };
};

const initialState: IHomeState = {
  loading: false,
  error: false,
  success: false,
  msg: ""
};

export default (state = initialState, action: HomeActions): IHomeState => {
  switch (action.type) {
    case "@@HOME/CONTRACT_DATA_FETCHING":
      return { ...state, loading: true, success: false, error: false, msg: "" };
    case "@@HOME/CONTRACT_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        msg: "Success!"
      };
    case "@@HOME/CONTRACT_DATA_FAILED":
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        msg: action.payload
      };
    default:
      return state;
  }
};
