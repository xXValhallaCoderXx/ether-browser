import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

interface IProps {
  data: any;
  toggle: () => void;
  isOpen: boolean;
}

const SelectedFileView: React.SFC<IProps> = ({ data, toggle, isOpen }) => {
  let shortTx = data.txHash.substring(0, 20);
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Tx Detail</ModalHeader>
      <ModalBody>
        <h6>Type: {data.type}</h6>
        <h6>Status: {data.status}</h6>
        <h6>Date: {data.date}</h6>
        <h6>Block Confirmations: {data.confirmations}</h6>
        <h6>Source / Destination Wallet:</h6>
        <h6>Ether Amount: {data.value}</h6>
        <h6>Fiat Value: {data.fiat}</h6>
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
};

export default SelectedFileView;
