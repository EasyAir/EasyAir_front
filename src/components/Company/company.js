import React, {useState, Fragment, Component, useEffect, tate} from 'react';
import { Link } from 'react-router-dom';
import * as C from './companyStyle';
import img from './download.jpg';
import nullImg from './카메라4.jpg';
import './company.css'
import axios from 'axios';
import CompanyManagement from './CompanyManagement'

const Company=()=>{
    let i =0;
    const [setMap, arr] = useState([]);
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://easyair.herokuapp.com/clients',
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("token"),
            },
            data: {

            }
        }).then((res) => {
            console.log('공장 정보 반환')
            console.log(res)
            console.log(res.data.clients)
            arr(res.data.clients) // 스테이트에 객체 저장
        })
    },[])
     const menu = [setMap];
     function a(){
        console.log(menu)   
     }
    const menulist = menu[0].map((e)=>(<CompanyManagement companyName={e.name} phoneNum={e.repr_phone} content={e.profile} represent={e.repr_name}></CompanyManagement>))  
        return(
            <C.Body>
                <div className="CompanyIntro">
                    <h2>Factory Chart</h2>
                    <a style={{color:'gray'}}>- 팀의 직원들이 포함된 공장의 정보가 표시됩니다 - </a>     <br/><br/>
                    <a>( Information about the company that contains you will be displayed  )</a>
                </div>
                <div className="ManagementContainer">
                     {menulist} 
                </div>
                <C.Footer>
                    <Link to="/addFactory">
                     <button>공장 추가</button>
                    </Link>
                </C.Footer>
            </C.Body>
        );
}

export default Company;