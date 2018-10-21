import React, { Component } from "react";
import {
  Button,
  Input,
  FormGroup,
  Label,
  FormText,
  Form,
  InputGroup,
  InputGroupAddon,
  FormFeedback,
  Col
} from "reactstrap";
import { Loader } from "shared/components";
const styles = require("./styles.module.scss");

interface IProps {
  fetchContractData: (data: string) => void;
  status: {
    loading: boolean;
    success: boolean;
    error: boolean;
    msg: string;
  };
}
interface IState {
  value: string;
}

export default class HomeForm extends Component<IProps, IState> {
  state = {
    value: ""
  };
  render() {
    const { loading, error, msg } = this.props.status;
    return (
      <Form onSubmit={this._handleSubmit}>
        <InputGroup>
          <InputGroupAddon className="text-primary" addonType="prepend">
            Contract ID
          </InputGroupAddon>
          <Input
            invalid={error}
            type="text"
            value={this.state.value}
            onChange={this._handleOnChange}
          />
          <FormFeedback>{msg}</FormFeedback>
        </InputGroup>

        <FormText color="muted" className={styles.formLabel}>
          Please enter the Ethereum contract you wish to view
        </FormText>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 5, height: 40 }}
        >
          {loading ? (
            <Loader />
          ) : (
            <Button color="secondary" type="submit" block>
              ENTER
            </Button>
          )}
        </div>
      </Form>
    );
  }

  private _handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ value: e.currentTarget.value });

  private _handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.fetchContractData(this.state.value);
  };
}
