// import { Dispatch, AnyAction } from "redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { IAppState } from "store/rootReducer";

export interface IHomeState {
  readonly walletURL: string | null;
}

export type Actions =
  | { type: "@@HOME/ETHEREUM_CONTRACT"; payload: string }
  | { type: "@@HOME/CONTRACT_DATA_FETCHING" }
  | { type: "@@HOME/CONTRACT_DATA_SUCCESS"; payload: object }
  | { type: "@@HOME/CONTRACT_DATA_FAILED" };

// type SideEffect<T> = ThunkAction<Promise<T>, IAppState, {}, Actions>;

// type ThunkResult<R> = ThunkAction<R, IAppState, {}, Actions>;

export const setEtheremContract = (contractID: string): Actions => {
  return { type: "@@HOME/ETHEREUM_CONTRACT", payload: contractID };
};

// export const fetchContractData = (data: string): ThunkResult<any> => {
//   return async (dispatch: ThunkDispatch<IAppState, void, Actions>) => {
//     dispatch({ type: "@@HOME/CONTRACT_DATA_FETCHING" });
//     try {
//       const result = await fetch(
//         `http://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&sort=asc&apikey=85RPZWEIAV7IAH4YRTGZPHG68TPP2X2GCS`
//       );
//       console.log("WHAT RESULT: ", result);
//       const data = await result.json();
//       dispatch({ type: "@@HOME/CONTRACT_DATA_SUCCESS", payload: data });
//     } catch (e) {
//       dispatch({ type: "@@HOME/CONTRACT_DATA_FAILED" });
//     }
//   };
// };

const initialState: IHomeState = {
  walletURL: null
};

export default (state = initialState, action: Actions): IHomeState => {
  switch (action.type) {
    case "@@HOME/ETHEREUM_CONTRACT":
      return { ...state, walletURL: action.payload };
    default:
      return state;
  }
};
