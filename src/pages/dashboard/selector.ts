import { createSelector } from "reselect";
import { IRootState } from "store/rootReducer";
import { currencyFormat } from "./dashboard-utils";
import { currenySymbol } from "./dashboard-utils";
import { convertUnix } from "shared/utils";
import unit from "ethjs-unit";

const txData = (state: IRootState) => state.initDashboard;
const dashboardData = (state: IRootState) => state.dashboard;

export const overViewData = createSelector(
  [txData, dashboardData],
  (data: any, dashData: any) => {
    const { selectedCurrency } = dashData;
    const convertedEth = unit.fromWei(data.etherBalance, "ether");
    if (data.selectedContract === null) {
      return null;
    } else {
      let overviewData = {
        selectedCurrency,
        contractID: data.selectedContract,
        etherBalance: convertedEth,
        currencySymbol: currenySymbol(selectedCurrency),
        ertherRate: data.etherRates[selectedCurrency],
        etherFiat: currencyFormat(selectedCurrency).format(
          data.etherRates[selectedCurrency] * convertedEth
        ),
        totalTx: data.contractData[data.selectedContract].length
      };
      return overviewData;
    }
  }
);

export const selectedRow = createSelector(
  [txData, dashboardData],
  (data: any, dashData: any) => {
    if (dashData.selectedRow === null) {
      return null;
    }
    const {
      date,
      confirmations,
      ether,
      txHash,
      to,
      from,
      isError,
      gasUsed,
      gasPrice,
      fiatValue
    } = dashData.selectedRow;
    const { selectedCurrency } = dashData;

    const { etherRates, selectedContract } = data;
    const convertedEth = unit.fromWei(gasUsed * gasPrice, "ether");

    if (data.selectedContract === null) {
      return null;
    } else {
      const txType =
        selectedContract.toLowerCase() == to.toLowerCase()
          ? "Recieved"
          : "Sent";
      let sidePanelData = {
        txEtherFiat: fiatValue,
        value: ether,
        txHash: txHash,
        type: txType,
        status: isError === "1" ? "Failed" : "Complete",
        date,
        confirmations,
        source: txType !== "Recieved" ? null : from,
        destination: txType === "Recieved" ? null : to,
        ether: unit.fromWei(gasUsed * gasPrice, "ether"),
        fiat: currencyFormat(selectedCurrency).format(
          etherRates[selectedCurrency] * convertedEth
        ),
        currencySymbol: currenySymbol(selectedCurrency)
      };

      return sidePanelData;
    }
  }
);

export const tableData = createSelector(
  [txData, dashboardData],
  (data: any, dashData: any) => {
    const { contractData, selectedContract, etherRates } = data;
    const { selectedCurrency } = dashData;

    if (selectedContract === null) {
      return null;
    } else {
      let parsedData = contractData[selectedContract].map((tx: any) => {
        const txType =
          selectedContract.toLowerCase() == tx.to.toLowerCase() ? "IN" : "OUT";
        const etherValue = unit.fromWei(tx.value, "ether");
        return {
          confirmations: tx.confirmations,
          gasUsed: tx.gasUsed,
          gasPrice: tx.gasPrice,
          txHash: tx.hash,
          isError: tx.isError,
          from: tx.from,
          to: tx.to,
          date: {
            original: tx.timeStamp,
            parsed: convertUnix(tx.timeStamp)
          },
          ether: etherValue,
          fiatValue: currencyFormat(selectedCurrency).format(
            etherRates[selectedCurrency] * etherValue
          ),
          type: txType
        };
      });
      return parsedData;
    }
  }
);
