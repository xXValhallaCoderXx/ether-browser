
export interface InitialStateHome {
  readonly walletURL: string | null;
}


export enum TodoActionType {
  ADD_TODO = '[Todo] ADD_TODO',
  REMOVE_TODO = '[Todo] REMOVE_TODO',
  EDIT_TODO = '[Todo] EDIT_TODO'
}

export type HomeActions =
  | { type: '@@HOME/WALLET_FETCHING'; payload: string }
  | { type: '@@HOME/WALLET_SUCCESS'; payload: any }
  | { type: '@@HOME/WALLET_FAILED'; payload: any };

  export function loginRequest(payload: string): HomeActions {
    return { type: '@@HOME/WALLET_FETCHING', payload };
  }



const initialState: InitialStateHome = {
  walletURL: null
}

export default (state = initialState, action: HomeActions): InitialStateHome => {
  switch(action.type){
    case "@@HOME/WALLET_FETCHING":
      return {...state, walletURL: action.payload}
    default:
      return state;
  }
}