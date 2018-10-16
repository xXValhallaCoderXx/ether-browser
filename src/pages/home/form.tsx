import React, { Component } from "react";
import { Button, Input, FormGroup, Label, FormText } from "reactstrap";
import { validateForm } from "./utils";

interface IState {
  value: string;
}

export default class HomeForm extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ""
    };
    this._handleOnChange = this._handleOnChange.bind(this);
    
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <FormGroup>
          <Label for="contractID">Contract ID</Label>
          <Input
            type="text"
            value={this.state.value}
            onChange={this._handleOnChange}
          />
          <FormText color="muted">
            Please enter the Ethereum contract you wish to view
          </FormText>
          <Button block style={{ marginTop: 10, marginBottom: -10 }}>
            ENTER
          </Button>
        </FormGroup>
      </form>
    );
  }

  private _handleOnChange = (e: React.FormEvent<HTMLInputElement>) =>
    this.setState({ value: e.currentTarget.value });

  private _handleSubmit = async (e: any) => {
    e.preventDefault();
    // validateForm()
    //   .then(res => {
    //     console.log("RESULT: ", res);
    //   })
    //   .catch(err => {
    //     console.log("ERROR");
    //   });
    let result = await validateForm();
    console.log("RESULTZZZ: ", result);
  };
}
