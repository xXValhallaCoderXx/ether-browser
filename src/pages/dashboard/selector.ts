import { createSelector } from "reselect";
import { IRootState } from "store/rootReducer";
import {currencyFormat} from "./dashboard-utils";
import {currenySymbol} from "./dashboard-utils";
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


export const selectedRow = createSelector([dashboardData], (data: any) => {
  if(data.selectedRow === null){
    return null;
  }
  return data.selectedRow;
})



