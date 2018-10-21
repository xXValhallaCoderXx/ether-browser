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


export const selectedRow = createSelector([dashboardData, txData], (data: any, txData: any) => {
  if(data.selectedRow === null){
    return null;
  }
  // const {timeStamp, confirmations, gasUsed, gasPrice} = data.selectedRow;
  // const { selectedCurrency, etherRates, etherBalance} = data;
  // const convertedEth = unit.fromWei(etherBalance, 'ether');
  
  // let sidePanelData = {
  //   type: "",
  //   status: "",
  //   date:  convertUnix(timeStamp),
  //   confirmations,
  //   source: null,
  //   destination: null,
  //   ether: unit.fromWei(gasUsed * gasPrice, "ether"),
  //   fiat: currencyFormat(selectedCurrency).format((etherRates[selectedCurrency] * convertedEth)),
  //   currencySymbol: currenySymbol(selectedCurrency),
  // }
  // console.log("SELECTED ROW DATA: ", sidePanelData);
  return null;
})




// <h6>Type: {currentContract.toLowerCase() == data.to.toLowerCase() ? "Recieved" : "Sent"}</h6>
// <h6>Status:</h6>
// <h6>Date: {convertUnix(data.timeStamp)}</h6>
// <h6>Block Confirmations: {data.confirmations}</h6>
// <h6>Source / Destination Wallet:</h6>
// <h6>Ether Amount: {unit.fromWei(data.gasUsed * data.gasPrice, "ether")}</h6>
// <h6>Fiat Value:</h6>