import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import * as C from './companyStyle';
import img from './download.jpg';
import nullImg from './카메라4.jpg';
import './company.css'


class CompanyManagement extends Component{
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

class Company extends Component{
    render(){
        return(
            <C.Body>
                <div className="CompanyIntro">
                    <h2>My Company</h2>
                    <a style={{color:'gray'}}>- 사용자님께서 포함된 회사의 정보가 표시됩니다 - </a>     <br/><br/>
                    <a>( Information about the company that contains you will be displayed  )</a>
                </div>
                <div className="ManagementContainer">
                        <CompanyManagement companyName="신진공장" phoneNum="010-1234-5678" content={img} represent="정지원"></CompanyManagement>
                        <CompanyManagement companyName="신진공장" phoneNum="010-1234-5678" content={img} represent="정지원"></CompanyManagement>
                        <CompanyManagement companyName="신진공장" phoneNum="010-1234-5678" content={img} represent="정지원"></CompanyManagement>
                        <CompanyManagement companyName="신진공장" phoneNum="010-1234-5678" content={img} represent="정지원"></CompanyManagement>
                        <CompanyManagement companyName="신진공장" phoneNum="010-1234-5678" content={img} represent="정지원"></CompanyManagement>
                </div>
                
                <C.Footer>
                    <Link to="/addFactory">
                     <button>공장 추가</button>
                    </Link>
                </C.Footer>
            </C.Body>
        );
    }
}

export default Company;