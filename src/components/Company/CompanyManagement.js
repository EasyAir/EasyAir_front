import React, {useState, Fragment, Component, useEffect, tate} from 'react';
import { Link } from 'react-router-dom';
import * as C from './companyStyle';
import './company.css'
import nullImg from './카메라4.jpg';
import axios from 'axios';

class CompanyManagement extends Component {
    render(){
        const { companyName, phoneNum, content, represent } = this.props; // props 코드길이 줄이기
        return(
            <div style={{display:'flex'}} className="managementCont">
            <Link to="/machineChart"><C.Container className="cont">
                <div><a>{companyName}</a><div className="companyName">(주)</div>
                </div>
                <div>연락처 : {phoneNum}</div>
                <div>대표이름 : {represent}</div>
                <img src={
                    content
                } alt=""/>
            </C.Container>
            </Link>
        </div>
        )
    }
}

CompanyManagement.defaultProps = {
    companyName: '등록된 공장이 없습니다.',
    date: '000-0000-0000',
    content: nullImg,
    represent: 'Nothing'
}

export default CompanyManagement;