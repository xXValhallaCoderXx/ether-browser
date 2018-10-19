import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Route, Switch } from "react-router-dom";

interface IState {
  isOpen: boolean;
  selectedItem: string;
}

interface IProps {
  handleChangeCurrency: (currency: string) => void;
}

export default class index extends Component<IProps, IState> {
  state = {
    isOpen: false,
    selectedItem: "USD"
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tx Browser</NavbarBrand>
        <NavbarToggler onClick={this._toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Switch>
              <Route exact path="/">
                <NavItem>
                  <NavLink href="/components/">About</NavLink>
                </NavItem>
              </Route>
              {/* If user is on Dashboard page - Display other Navlinks */}
              <Route exact path="/dashboard">
                <Fragment>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {this.state.selectedItem}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem value="USD" onClick={this._setValue}>USD</DropdownItem>
                      <DropdownItem value="JPY" onClick={this._setValue}>JPY</DropdownItem>
                      <DropdownItem value="EUR" onClick={this._setValue}>EUR</DropdownItem>
                      <DropdownItem value="SGD" onClick={this._setValue}>SGD</DropdownItem>
                      <DropdownItem value="CNY" onClick={this._setValue}>CNY</DropdownItem>
                      <DropdownItem value="KRW" onClick={this._setValue}>KRW</DropdownItem>
                      <DropdownItem value="GBP" onClick={this._setValue}>GBP</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Fragment>
              </Route>
            </Switch>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  _setValue = (e: any) => {
    this.props.handleChangeCurrency(e.target.value);
    this.setState({ selectedItem: e.target.value})
  };
  _toggle = () => this.setState({ isOpen: !this.state.isOpen });
}
