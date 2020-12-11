import React, {useState, Fragment, Component, state} from 'react';
import { Link } from 'react-router-dom';
import * as S from './addStyle';
import './add.css';
import axios from 'axios'


class Add extends Component{
    state={
        companyName: '',
        name: '',
        phoneNum: '',
        location: '',
        toggle: true
    }
    
    subValue=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
        axios({
            method:"post",
            url: "http://easyair.herokuapp.com/check/client",
            headers:{
                "Content-Type": "application/json"
            },
            data:{
                "name":e.target.value
            }
        }).then((e)=>{
            console.log('중복 체크 성공')
            console.log(e.data.valid)
            if(e.data.valid){
                this.setState({
                    toggle : true
                })
            }
            else{
                this.setState({
                    toggle : false
                })
            }
        }).catch((e)=>{
            console.log('중복체크 에러')
        })
    }
    ax=(e)=> {
            e.preventDefault(); 
            axios({
                method: 'post',
                url: 'http://easyair.herokuapp.com/clients',
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                    "Content-Type": "application/json"
                },
                data: {
                    "name": this.state.companyName,
                    "location": this.state.location,
                    "repr_name": this.state.name,
                    "repr_phone": this.state.phoneNum,
                    "repr_title": "대표 직함"
                }
            }).then((res) => {
                console.log('sdfs' + res)
    
            }).catch((err) => {
                console.log('ddd' + err)
            })
            setTimeout(function () {
                window.location.href = "http://localhost:3000/company";
            }, 500)
        }
    render() {
        const a = "공장 이름이 존재합니다."
        const b = ""
        return (
            <S.addBody>
                <div>
                    <h2>Add Factory</h2>
                    <h4>- 새로운 공장을 등록합니다 -</h4>
                    <h4>( This page add a new factory )</h4>
                </div>
                <form onSubmit={this.subValue,this.ax} method="get">
                    <h6>{(this.state.toggle==false)?a:b}</h6>
                    <S.inputCont>
                       {/*  <InputIformation titleName="Company Name" placeholder="회사명을 입력하세요" name="companyName"></InputIformation>  */}
                        <div><a> Company Name <i>*</i></a><input type="text" name="companyName" onChange={this.subValue} placeholder="공장명을 입력하세요"/></div>
                        <div><a> Repr Name <i>*</i></a><input type="text" name="name" onChange={this.subValue} placeholder="대표명을 입력하세요"/></div>
                    </S.inputCont>
                    <S.inputCont>
                        <div><a> Location <i>*</i></a><input type="text" name="location" onChange={this.subValue} placeholder="주소를 입력하세요" style={{width:'560px'}}/></div>
                    </S.inputCont>
                    <S.inputCont>
                        <div><a> Phone Num <i>*</i></a><input type="text" name="phoneNum" onChange={this.subValue} placeholder="전화번호를 입력하세요"style={{width:'400px'}}/></div>
                    </S.inputCont>
                    <button type="submit">SUBMIT</button>
                </form>
            </S.addBody>
        )
    }
}

export default Add;