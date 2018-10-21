import React, { Component } from "react";
import {
  Button,
  Input,
  FormGroup,
  Label,
  FormText,
  Form,
  FormFeedback,
  Col
} from "reactstrap";
import {Loader} from "shared/components";
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
        <FormGroup>
          <Label for="contractID">Contract ID</Label>
          <Input
            invalid={error}
            type="text"
            value={this.state.value}
            onChange={this._handleOnChange}
          />
          <FormText color="muted" className={styles.formLabel}>
            Please enter the Ethereum contract you wish to view
          </FormText>
          <FormFeedback>{msg}</FormFeedback>
          {loading ? (
            <Col className={styles.loadingWrapper}>
              <Loader />
            </Col>
          ) : (
            <Button color="secondary" type="submit" block style={{marginTop: 10, marginBottom: -10}}>
              ENTER
            </Button>
          )}
        </FormGroup>
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
