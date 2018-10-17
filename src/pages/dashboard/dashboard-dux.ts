import {HomeActions} from "pages/home/home-dux";

export interface IDashboardState {
  readonly contractData: {};
  readonly selectedContract: string | null;
}

// export const setEtheremContract = (contractID: string): Actions => {
//   return { type: "@@HOME/ETHEREUM_CONTRACT", payload: contractID };
// };


const initialState: IDashboardState = {
  contractData: {},
  selectedContract: null
};

export default (state = initialState, action: HomeActions): IDashboardState => {
  switch (action.type) {
    case "@@HOME/CONTRACT_DATA_SUCCESS":
      const selectedContract = Object.keys(action.payload);
      return { ...state, contractData: action.payload, selectedContract: selectedContract[0] };
    default:
      return state;
  }
};
