export interface IHomeState {
  readonly walletURL: string | null;
}

export type Actions =
  | { type: "@@HOME/ETHEREUM_CONTRACT"; payload: string };


export const setEtheremContract = (contractID: string): Actions => {
  return {type: "@@HOME/ETHEREUM_CONTRACT", payload: contractID}
}

const initialState: IHomeState = {
  walletURL: null
};

export default (
  state = initialState,
  action: Actions
): IHomeState => {
  switch (action.type) {
    case "@@HOME/ETHEREUM_CONTRACT":
      return { ...state, walletURL: action.payload };
    default:
      return state;
  }
};
