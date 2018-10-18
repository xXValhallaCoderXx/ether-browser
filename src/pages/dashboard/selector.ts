import { createSelector } from "reselect";
import { IRootState } from "store/rootReducer";
import {currencyFormat} from "./utils";

const Web3 = require("web3");

var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/b0bca364d36142169bbd9c52c1838da5"));

const txData = (state: IRootState) => state.initDashboard;
const dashboardData = (state: IRootState) => state.dashboard;

export const overViewData = createSelector([txData, dashboardData], (data: any, dashData: any) => {
  const {selectedCurrency} = dashData;
  const convertedEth = web3.utils.fromWei(data.etherBalance, 'ether')
  let overviewData = {
    selectedCurrency,
    contractID: data.selectedContract,
    etherBalance: convertedEth,
    etherFiat: currencyFormat(selectedCurrency).format((data.etherRates[selectedCurrency] * convertedEth)),
    totalTx: data.contractData[data.selectedContract].length
  };
  return overviewData;
});

