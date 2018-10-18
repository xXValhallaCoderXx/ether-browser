import { createSelector } from "reselect";
import { IRootState } from "store/rootReducer";
import moment from "moment";

const txData = (state: IRootState) => state.dashboard;

export const parsedData = createSelector([txData], (data: any) => {
  console.log("WHAT IS DATA: ", data);
  data.contractData[data.selectedContract].map((tx: any) => {
    tx.timeStamp = moment.unix(tx.timeStamp).format("MM/DD/YYYY");
  });
  return data;
});
