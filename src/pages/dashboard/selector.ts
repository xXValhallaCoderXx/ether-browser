import { createSelector } from "reselect";
import { IRootState } from "store/rootReducer";
import {currencyFormat} from "./dashboard-utils";
import {currenySymbol} from "./dashboard-utils";
import { convertUnix } from "shared/utils";
import unit from "ethjs-unit";

const txData = (state: IRootState) => state.initDashboard;
const dashboardData = (state: IRootState) => state.dashboard;

export const overViewData = createSelector([txData, dashboardData], (data: any, dashData: any) => {
  const {selectedCurrency} = dashData;
  const convertedEth = unit.fromWei(data.etherBalance, 'ether');

  let overviewData = {
    selectedCurrency,
    contractID: data.selectedContract,
    etherBalance: convertedEth,
    currencySymbol: currenySymbol(selectedCurrency),
    ertherRate: data.etherRates[selectedCurrency],
    etherFiat: currencyFormat(selectedCurrency).format((data.etherRates[selectedCurrency] * convertedEth)),
    totalTx: data.contractData[data.selectedContract].length
  };
  return overviewData;
});


export const selectedRow = createSelector([txData, dashboardData], (data: any, dashData: any) => {
  if(dashData.selectedRow === null){
    return null;
  }
  const {timeStamp, confirmations, gasUsed, gasPrice, to, from, isError, hash, value} = dashData.selectedRow;
  const {selectedCurrency} = dashData;

  const { etherRates, selectedContract} = data;
  const convertedEth = unit.fromWei(gasUsed * gasPrice, 'ether');
  const etherValue = unit.fromWei(value, "ether");
  
  const txType = selectedContract.toLowerCase() == to.toLowerCase() ? "Recieved" : "Sent";

  let sidePanelData = {
    txEtherFiat: currencyFormat(selectedCurrency).format((etherRates[selectedCurrency] * etherValue)),
    value: etherValue,
    txHash: hash,
    type: txType,
    status: isError === "1" ? "Failed" : "Complete",
    date:  convertUnix(timeStamp),
    confirmations,
    source: txType !== "Recieved" ? null : from,
    destination:  txType === "Recieved" ? null : to,
    ether: unit.fromWei(gasUsed * gasPrice, "ether"),
    fiat: currencyFormat(selectedCurrency).format((etherRates[selectedCurrency] * convertedEth)),
    currencySymbol: currenySymbol(selectedCurrency),
  }

  return sidePanelData;
})