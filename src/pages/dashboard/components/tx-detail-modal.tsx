import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import {ITxData} from "shared/types";

interface IProps {
  txData: any;
  toggle: () => void;
  isOpen: boolean;
}

const SelectedFileView: React.SFC<IProps> = ({ txData, toggle, isOpen }) => {
  if (txData) {
    let shortTx = txData.txHash.substring(0, 20);
    return (
      <Modal centered isOpen={isOpen} toggle={toggle} size="sm">
        <ModalHeader className="text-primary" toggle={toggle}>
          Tx Detail
        </ModalHeader>
        <ModalBody>
        <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Tx ID
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.txHash}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Ether
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.value}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Value
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.txEtherFiat.parsed}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Fee
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.fiat}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Date
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.date.parsed}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Type
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.type}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Status
              </InputGroupAddon>
              <Input
                invalid={txData.status !== "Complete" ? true : false}
                valid={txData.status === "Complete" ? true : false}
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.status}
                disabled
              />
            </InputGroup>

            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Blocks
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.confirmations}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                {txData.source === null ? "Destination" : "Source"}
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={
                  txData.source === null ? txData.destination : txData.source
                }
                disabled
              />
            </InputGroup>
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
