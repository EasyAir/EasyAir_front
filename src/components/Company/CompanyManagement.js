import React, {useState, Fragment, Component, useEffect, tate} from 'react';
import { Link } from 'react-router-dom';
import * as C from './companyStyle';
import './company.css'
import nullImg from './카메라4.jpg';
import axios from 'axios';
import ajax from 'ajax'
import $ from 'jquery';

class CompanyManagement extends Component {
    render(){
        const { companyName, phoneNum, content, represent, id } = this.props; // props 코드길이 줄이기
        const factoryDelete =()=>{
/*             axios({
                method:'delete',
                url:'http://easyair.herokuapp.com/client/' + id,
                headers:{
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
                data:{

                }
            }).then((e)=>{
                console.log('공장 삭제 성공')
                console.log(e)
            }).catch((e)=>{
                console.log('공장 삭제 에러')
                console.log(e);
            }) */
            $.ajax({
                type:'delete',
                url: 'http://easyair.herokuapp.com/client/' + id,
                headers:{
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
                data:{

                },
                success: function(e){
                    console.log('공장 삭제 성공')
                    console.log(e)
                    window.location.href = "http://localhost:3000/company" // 이거 새로고침 없이 하는 법 알아오기
                },
                error: function(e){
                    console.log('공장 삭제 실패')
                    console.log(e)
                }
                
            })
        }
        return(
            <div style={{display:'flex'}} className="managementCont">
            <Link to="/machineChart">
                <C.Container className="cont">
                <div><a>{companyName}</a><div className="companyName">(주)</div>
                </div>
                <div>연락처 : {phoneNum}</div>
                <div>대표이름 : {represent}</div>
                <img src={
                    content
                } alt=""/>
                <div>
                   <Link to="/company"> <button onClick={factoryDelete}>공장 삭제</button></Link><button>정보 수정</button>
                </div>
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