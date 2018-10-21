import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { convertUnix } from "shared/utils";
import { isMobile } from "react-device-detect";
import unit from "ethjs-unit";

interface IProps {
  data: any;
  selectRow: (data: any) => void;
  height: any;
  toggle: () => void;
}

interface IState {
  selected: any;
}

export default class DataTable extends Component<IProps, IState> {
  state = {
    selected: null
  };

  render() {
    const { data } = this.props;
    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: "TxHash",
            accessor: "txHash"
          },
          {
            Header: "From",
            accessor: "from"
          },
          {
            Header: "To",
            accessor: "to"
          },
          {
            accessor: "date",
            Header: "Date",
          },
          {
            accessor: "ether",
            Header: "Ether",
          },
          {
            accessor: "fiatValue",
            Header: "Fiat Value",
          }
        ]}
        defaultPageSize={20}
        style={{
          fontSize: 14,
          width: "100%",
          height: `${this.props.height}px`
        }}
        className="-striped -highlight"
        getTrProps={(state: any, rowInfo: any) => {
          if (rowInfo && rowInfo.row) {

            return {
              onClick: (e: any) => {
                this.setState({
                  selected: rowInfo.index
                });
                this.props.selectRow(rowInfo.original);
                if (isMobile) {
                  this.props.toggle();
                }
              },
              style: {
                background:
                  rowInfo.index === this.state.selected ? "#24bfd2" : "white",
                color: rowInfo.index === this.state.selected ? "white" : "black"
              }
            };
          } else {
            return {};
          }
        }}
      />
    );
  }
}
