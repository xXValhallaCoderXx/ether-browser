export interface ITxData {
  txHash: string;
  value: string;
  txEtherFiat: string;
  fiat: string;
  date: {
    original: string;
    parsed: string;
  };
  type: string;
  status: string;
  confirmations: string;
  source: string;
  destination: string;
}

export interface IOverviewData {
  contractID: string;
  etherBalance: string;
  etherFiat: string;
}