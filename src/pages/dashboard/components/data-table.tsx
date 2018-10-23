import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { isMobile } from "react-device-detect";
import { convertUnix } from "shared/utils";
import { Badge } from "reactstrap";

interface IProps {
  data: any;
  selectRow: (data: any) => void;
  height: any;
  toggle: () => void;
  currencySymbol: string;
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
            id: "date",
            accessor: (d: any) => d.date.original,
            Header: "Date",
            Cell: row => {
              return (
                <span>
                  {convertUnix(row.value)}
                </span>
              );
            }
          },
          {
            id: "ether",
            accessor: (d: any) => Number(d.ether),
            Header: "Ether"
          },
          {
            id: "fiatValue",
            accessor: (d: any) => d.fiatValue.parsed,
            Header: "Fiat Value"
          },
          {
            accessor: "type",
            Header: "Type",
            Cell: row => (
              <span className="d-flex justify-content-center align-items-center">
                <Badge color={row.value === "IN" ? "success" : "warning"}>
                  {row.value === "IN" ? "IN" : "OUT"}
                </Badge>
              </span>
            )
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
            const { isError } = rowInfo.original;
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
                backgroundColor: this._handleRowBackground(
                  isError,
                  rowInfo.index
                ),
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

  _handleRowBackground = (isError: any, rowIndex: any) => {
    if (isError !== "1" && rowIndex === this.state.selected) {
      return "#24bfd2";
    } else if (isError === "1" && rowIndex !== this.state.selected) {
      return "rgba(255,0,0,0.3)";
    } else if (isError === "1" && rowIndex === this.state.selected) {
      return "#24bfd2";
    } else {
      return "white";
    }
  };
}
