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
}

export default class index extends Component<{}, IState> {
  state = {
    isOpen: false
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
                      Select Currency
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>USD</DropdownItem>
                      <DropdownItem>SGD</DropdownItem>
                      <DropdownItem>YEN</DropdownItem>
                      <DropdownItem>WON</DropdownItem>
                      <DropdownItem>GBP</DropdownItem>
                      <DropdownItem>YUAN</DropdownItem>
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
  _toggle = () => this.setState({ isOpen: !this.state.isOpen });
}
