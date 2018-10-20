export interface IDispatchProps {
  fetchContractData: (data: string) => void;
  home: {
    loading: boolean;
    success: boolean;
    error: boolean;
    msg: string;
  }
}