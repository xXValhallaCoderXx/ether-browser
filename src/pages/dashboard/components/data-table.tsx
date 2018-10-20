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
            accessor: "hash"
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
            id: "timeStamp",
            Header: "Date",
            accessor: (d: any) => {
              return convertUnix(d.timeStamp);
            }
          },
          {
            id: "value",
            Header: "Value",
            accessor: (d: any) => {
              return unit.fromWei(d.gasUsed * d.gasPrice, "ether");
            }
          },
          {
            id: "value",
            Header: "Fiat Value",
            accessor: (d: any) => {
              return unit.fromWei(d.gasUsed * d.gasPrice, "ether");
            }
          }
        ]}
        defaultPageSize={20}
        style={{
          fontSize: 13,
          width: "100%",
          height: `${this.props.height}px`
        }}
        className="-striped -highlight"
        getTrProps={(state: any, rowInfo: any) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: (e: any) => {
                if (isMobile) {
                  alert("OPEN MODAL")
                }else {
                  console.log("DESKTOP: ")
                  this.props.selectRow(rowInfo.original);
                }
                
                this.setState({
                  selected: rowInfo.index
                });
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
