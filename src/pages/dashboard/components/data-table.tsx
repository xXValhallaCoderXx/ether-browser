import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { convertUnix } from "shared/utils";
import unit from "ethjs-unit";

interface IProps {
  data: any;
  selectRow: (data: any) => void;
}

interface IState {
  selected: any;
  height: string;
}

export default class DataTable extends Component<IProps, IState> {
  state = {
    selected: null,
    height: "500"
  };
  // Handle Dynamic Table Height
  componentWillMount() {
    this._updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this._updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this._updateDimensions);
  }
  render() {
    console.log("WHAT IS THIS: ", this.state);
    const { data } = this.props;
    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: "TxHash",
            accessor: "hash",
            width: 200
          },
          {
            Header: "From",
            accessor: "from",
            width: 200
          },
          {
            Header: "To",
            accessor: "to",
            width: 200
          },
          {
            id: "timeStamp",
            Header: "Date",
            accessor: (d: any) => {
              return convertUnix(d.timeStamp);
            },
            width: 200
          },
          {
            id: "value",
            Header: "Value",
            accessor: (d: any) => {
              return unit.fromWei(d.gasUsed * d.gasPrice, "ether");
            },
            width: 150
          }
        ]}
        defaultPageSize={20}
        style={{
          fontSize: 13,
          height: `${this.state.height}px` // This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
        getTrProps={(state: any, rowInfo: any) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: (e: any) => {
                this.props.selectRow(rowInfo.original);
                this.setState({
                  selected: rowInfo.index
                });
              },
              style: {
                background:
                  rowInfo.index === this.state.selected ? "#00afec" : "white",
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

  _updateDimensions = () => {
    const height =
      window.innerHeight ||
      document.documentElement!.clientHeight ||
      document.body.clientHeight;
    let parsedHeight = height * .7;

    this.setState({ height:    parsedHeight.toString() });
  };

  // _calculateTableHeight = () => {
  //   const height =
  //     window.innerHeight ||
  //     document.documentElement!.clientHeight ||
  //     document.body.clientHeight;
  //   return `${height * 0.6}px`;
  // };
}
