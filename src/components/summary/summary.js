import React from 'react'
import * as su from './summaryStyle'
import profile from "../../img/김수현.png"

function CheckMenu(){
    return(
        <su.checkMenu>
            <div>
                <a href="">Serial Num : A124B123124</a>
                <a href="">● 작성 날짜 : 20200912</a>
            </div>
            <a style={{padding:"27px 30px", fontSize:"13px", color:"gray"}}>▶ 모델명 : 2020공기압축기</a>
        </su.checkMenu>
    )
}

function ChangMenu(){
    return(
        <su.ChangeMenu>
            <div style={{display:"flex"}}>
            <img src={profile} alt=""/>
            <div style={{display:"flex", flexDirection:"column"}}>
                <a href="">이재하</a>
                <a href="">THE COMPANY MEMBER</a>
            </div>
            </div>
            <div>
            <div style={{display:"flex", flexDirection:"column", marginRight:"100px"}}>
                <a href="">01028162734</a>
                <a href="">MEMBER'S PHONE NUMBER</a>
            </div>
            </div>
        </su.ChangeMenu>
    )
}

function Summary(){
    return(
        <su.SummaryBackground>
            <su.Container>
                <su.ProfileBox>
                    <img src={profile} alt=""/>
                    <h1>NAME : 호원이형</h1>
                    <a href="">E-MAIL : jidole02@naver.com</a>
                    <button>TEAM ADMIN</button>
                </su.ProfileBox>
                <su.ScrollMenu>
                    <su.Title><h5 style={{marginTop:"0"}}>가장 최근에 작성된 점검표</h5></su.Title>
                    <CheckMenu></CheckMenu>
                    <CheckMenu></CheckMenu>
                    <CheckMenu></CheckMenu>

                    <su.Title><h5>가장 임박한 작업의 직원</h5></su.Title>
                    <ChangMenu></ChangMenu>
                    <ChangMenu></ChangMenu> 
                    <ChangMenu></ChangMenu>
                </su.ScrollMenu>
                <su.SubMenu>
                    <div>
                        <a href="">회사 공기압축기 자동 관리 웹 / 앱 EASY AIR 입니다.</a>
                        <a href="">THE COMPANY'S COMPRESSIOR MANAGE WEB / APP</a>
                        <button>EASY AIR 설명 보기 ></button>
                    </div>
                </su.SubMenu>
            </su.Container>
        </su.SummaryBackground>
    )
}

export default Summary;