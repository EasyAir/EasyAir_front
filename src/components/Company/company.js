import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import * as C from './companyStyle';
import img from './download.jpg';
import nullImg from './카메라4.jpg';
import './company.css'


class CompanyManagement extends Component{
    render(){
        return(
            <C.Container className="cont">
                <div><a>{this.props.companyName}</a><div className="companyName">name</div>
                </div>
{/*                 <div>저희 회사는 반도체를 공정 및 제작하여 수출합니다. 중국에서 공장을 최초 설립하였습니다.</div> */}
                <div>등록일자 : {this.props.date}</div>
                <img src={
                    this.props.content
                } alt=""/>
            </C.Container>
        )
    }
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
                <div style={{display:'flex'}} className="managementCont">
                <CompanyManagement companyName="중국물산" date="2020-11-24" content={img}></CompanyManagement>
                <CompanyManagement companyName="samsung" date="2020-11-24" content={nullImg}></CompanyManagement>
                <CompanyManagement companyName="아직 회사가 없습니다." date="0000-00-00" content={nullImg}></CompanyManagement>
                </div>
            </C.Body>
        );
    }
}

export default Company;