import { createSelector } from "reselect";
import { IRootState } from "store/rootReducer";
const Web3 = require("web3");

var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/b0bca364d36142169bbd9c52c1838da5"));

const txData = (state: IRootState) => state.dashboard;

export const overViewData = createSelector([txData], (data: any) => {
  const convertedEth = web3.utils.fromWei(data.etherBalance, 'ether')
  let overviewData = {
    contractID: data.selectedContract,
    etherBalance: convertedEth,
    etherFiat: currencyFormatter.format((data.etherRates.USD * convertedEth)),
    totalTx: data.contractData[data.selectedContract].length
  };
  return overviewData;
});

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
