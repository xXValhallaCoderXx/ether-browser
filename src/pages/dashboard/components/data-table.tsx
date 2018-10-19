import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {convertUnix} from "shared/utils";

interface IProps {
  data: any;
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
          // {
          //   id: "value",
          //   Header: "Value",
          //   accessor: (d: any) => {
          //     const gasUsed = web3.utils.fromWei(d.gasUsed, 'ether')
          //     const gasPrice = web3.utils.fromWei(d.gasPrice, 'ether')
              
       
          //     console.log("CHECKING: ", gasPrice);
          //     return moment.unix(d.timeStamp).format("MM/DD/YYYY HH:mm:ss");
          //   },
          //   width: 200
          // }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        getTrProps={(state: any, rowInfo: any) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: (e: any) => {
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
