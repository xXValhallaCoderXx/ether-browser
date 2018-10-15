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
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
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
