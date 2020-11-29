import React, {useState, Fragment, Component} from 'react';
import * as M from './MachineChartStyle'

const Chart =()=>{
    return(
        <M.Tr>
        <i class="fas fa-users-cog"></i>
        <div>
            <a href="">A1234543245</a>
            <a href="">시리얼넘버 : 1SDF213123K</a>
        </div>
        <section>
            <a href=""><i class="fas fa-globe-americas"></i>china</a>
        </section>
        <footer>
            <a href=""><i class="fas fa-user-shield"></i>정지원 </a>
        </footer>
        </M.Tr>
    )
}

const Machine =()=>{
    return(
        <M.Background>
            <M.TableHeader>
                <a href="">기기정보</a>
                <a href="">제조국</a>
                <a href="">담당자</a>
                <a href=""> </a>
            </M.TableHeader>
            <M.TableBody>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart>
                <Chart></Chart><Chart></Chart>

                <Chart></Chart>
            </M.TableBody>
        </M.Background>
    )
}

export default Machine;