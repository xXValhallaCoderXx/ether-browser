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
import { MobileView } from "react-device-detect";
const styles = require("./styles.module.scss");

interface IState {
  isOpen: boolean;
  selectedItem: string;
}

interface IProps {
  handleChangeCurrency?: (currency: string) => void;
}

export default class index extends Component<IProps, IState> {
  state = {
    isOpen: false,
    selectedItem: "USD"
  };
  render() {
    return (
      <Navbar
        light
        fixed="top"
        color="light"
        expand="md"
        style={{ borderBottom: "2px solid black" }}
      >
        <NavbarBrand>
          <img src={require("shared/images/ether-logo.png")} height="35" />
          <span style={{ marginLeft: 20 }}>Ethereum Tx Browser</span>
        </NavbarBrand>
        <NavbarToggler onClick={this._toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Switch>
              {/* If user is on Dashboard page - Display other Navlinks */}
              <Route exact path="/dashboard">
                {/* <MobileView> */}
                  <Fragment>
                    <div className={styles.selectCurrencyWrapper}>
                      Select Currency
                    </div>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {this.state.selectedItem}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem value="USD" onClick={this._setValue}>
                          USD
                        </DropdownItem>
                        <DropdownItem value="JPY" onClick={this._setValue}>
                          JPY
                        </DropdownItem>
                        <DropdownItem value="EUR" onClick={this._setValue}>
                          EUR
                        </DropdownItem>
                        <DropdownItem value="SGD" onClick={this._setValue}>
                          SGD
                        </DropdownItem>
                        <DropdownItem value="CNY" onClick={this._setValue}>
                          CNY
                        </DropdownItem>
                        <DropdownItem value="KRW" onClick={this._setValue}>
                          KRW
                        </DropdownItem>
                        <DropdownItem value="GBP" onClick={this._setValue}>
                          GBP
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Fragment>
                {/* </MobileView> */}
              </Route>
            </Switch>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  _setValue = (e: any) => {
    if (this.props.handleChangeCurrency) {
      this.props.handleChangeCurrency(e.target.value);
      this.setState({ selectedItem: e.target.value });
    }
  };
  _toggle = () => this.setState({ isOpen: !this.state.isOpen });
}
