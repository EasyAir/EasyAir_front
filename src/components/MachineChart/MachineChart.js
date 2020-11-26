import React, {useState, Fragment, Component} from 'react';
import * as M from './MachineChartStyle'

class Table extends Component{
    render() {
        return (
            <tr>
                <td>{this.props.factory}</td>
                <td>{this.props.serial}</td>
                <td>{this.props.machine}</td>
                <td>{this.props.made}</td>
            </tr>
        )
    }
}

const Machine=()=>{
    return(
        <M.Background>
            <M.Header>- 신진공장 기계 목록 -</M.Header>
            <M.MachineChart>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>시리얼 넘버</th>
                            <th>모델명</th>
                            <th>제조공장</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>

                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>

                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>

                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>
                        <Table factory="신진공장" serial="102313123" machine="A1213" made="china"></Table>

                    </tbody>
                </table>
            </M.MachineChart>
        </M.Background>
    )
}

export default Machine;