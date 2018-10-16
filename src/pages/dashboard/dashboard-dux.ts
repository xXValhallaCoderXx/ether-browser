export interface InitialStateHome {
  readonly walletURL: string | null;
}

export type HomeActions =
  | { type: "@@HOME/WALLET_FETCHING"; }
  | { type: "@@HOME/WALLET_SUCCESS"; payload: any }
  | { type: "@@HOME/WALLET_FAILED"; payload: any };

export const fetchWalletData = () => {
  return (dispatch: any) => {
    dispatch({
      type: "@@HOME/WALLET_FETCHING"
    })
    return fetch(`http://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&sort=asc&apikey=85RPZWEIAV7IAH4YRTGZPHG68TPP2X2GCS`)
      .then(
        response => response.json(),
        error => {
          dispatch({
            type: "@@HOME/WALLET_FAILED",
            payload: "ERROR"
          })
        }
      )
      .then(json => {
        dispatch({
          type: "@@HOME/WALLET_SUCCESS",
          payload: json
        })
      })
  };
};


const initialState: InitialStateHome = {
  walletURL: null
};

export default (
  state = initialState,
  action: HomeActions
): InitialStateHome => {
  switch (action.type) {
    case "@@HOME/WALLET_FETCHING":
      return { ...state };
    default:
      return state;
  }
};



