import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

interface IProps {
  txData: any;
  toggle: () => void;
  isOpen: boolean;
}

const SelectedFileView: React.SFC<IProps> = ({ txData, toggle, isOpen }) => {
  if(txData){
    let shortTx = txData.txHash.substring(0, 20);
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader className="text-primary" toggle={toggle}>Tx Detail</ModalHeader>
        <ModalBody>
          <h6>Type: {txData.type}</h6>
          <h6>Status: {txData.status}</h6>
          <h6>Date: {txData.date}</h6>
          <h6>Block Confirmations: {txData.confirmations}</h6>
          <h6>Source / Destination Wallet:</h6>
          <h6>Ether Amount: {txData.value}</h6>
          <h6>Fiat Value: {txData.fiat}</h6>
          <h6>
            <span style={{ fontSize: 18 }} id="tx-hash">
              Tx ID: {shortTx}
              ...
            </span>
          </h6>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            CLOSE
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
  return null;
};

export default SelectedFileView;
