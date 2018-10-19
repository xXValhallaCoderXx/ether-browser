import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {convertUnix} from "shared/utils";
import unit from "ethjs-unit";

interface IProps {
  data: any;
  selectRow: (data: any) => void;
}

interface IState {
  selected: any;
}

export default class DataTable extends Component<IProps, IState> {
  state = {
    selected: null
  }
  render() {
    const {data} = this.props;
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
              return unit.fromWei(d.gasUsed * d.gasPrice, 'ether');
            },
            width: 200
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        getTrProps={(state: any, rowInfo: any) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: (e: any) => {
                this.props.selectRow(rowInfo.orignal);
                this.setState({
                  selected: rowInfo.index
                })
              },
              style: {
                background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
                color: rowInfo.index === this.state.selected ? 'white' : 'black'
              }
            }
          }else{
            return {}
          }
        }}
      />
    );
  }
}
