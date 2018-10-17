import React, { Component } from "react";
import { Button, Input, FormGroup, Label, FormText, Form, FormFeedback } from "reactstrap";
import { validateForm } from "./utils";


interface IProps {
  fetchData: (data: string) => void;
}
interface IState {
  value: string;
}

export default class HomeForm extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ""
    };
    this._handleOnChange = this._handleOnChange.bind(this);
  }
  render() {
    return (
      <Form onSubmit={this._handleSubmit}>
        <FormGroup>
          <Label for="contractID">Contract ID</Label>
          <Input
            // valid={false}
            // invalid={true}
            type="text"
            value={this.state.value}
            onChange={this._handleOnChange}
          />
          <FormText color="muted">
            Please enter the Ethereum contract you wish to view
          </FormText>
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <Button block style={{ marginTop: 10, marginBottom: -10 }}>
            ENTER
          </Button>
        </FormGroup>
      </Form>
    );
  }

  private _handleOnChange = (e: React.FormEvent<HTMLInputElement>) =>
    this.setState({ value: e.currentTarget.value });

  private _handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let result = await validateForm(this.state.value);
      this.props.fetchData(this.state.value);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  };
}
