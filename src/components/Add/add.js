import React, {useState, Fragment, Component, state} from 'react';
import { Link } from 'react-router-dom';
import * as S from './addStyle';
import './add.css';
import axios from 'axios'

class Add extends Component{
    state={
        companyName: '',
        phoneNum: '',
        email: '',
        location: ''
    }
    subValue=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submit=(e)=>{
/*         e.preventDefault(); */
        axios({
            method: 'post',
            url: 'https://www.easyair.herokuapp.com/server/company',
             headers: {
                Authorization: "3CRVq4DzBsm6RfIFYPzYxfbiFatujITujGjwbgo9dVwAAAF16TQzeQ"
            }, 
            data: {
                name : this.state.companyName,
                email: this.state.email,
                phone: this.state.phoneNum,
                location: this.state.location
            }
        })
        console.log(this.state)
    }
    render(){
        return(
            <S.addBody>
                <div>
                    <h2>New Company</h2>
                    <h4>- 새로운 회사 레포지토리를 생성합니다 -</h4>
                    <h4>( Create a new company repository )</h4>
                </div>
                <form onSubmit={this.subValue,this.submit} method="get">
                    <S.inputCont>
                       {/*  <InputIformation titleName="Company Name" placeholder="회사명을 입력하세요" name="companyName"></InputIformation>  */}
                        <div><a> Company Name <i>*</i></a><input type="text" name="companyName" onChange={this.subValue} placeholder="회사명을 입력하세요"/></div>
                        <div><a> Phone Num <i>*</i></a><input type="text" name="phoneNum" onChange={this.subValue} placeholder="전화번호를 입력하세요"/></div>
                    </S.inputCont>
                    <S.inputCont>
                        <div><a> E-mail <i>*</i></a><input type="text" name="email" onChange={this.subValue} placeholder="이메일을 입력하세요" style={{width:'560px'}}/></div>
                    </S.inputCont>
                    <S.inputCont>
                        <div><a> Location <i>*</i></a><input type="text" name="location" onChange={this.subValue} placeholder="주소를 입력하세요"style={{width:'400px'}}/></div>
                    </S.inputCont>
                    <button type="submit">SUBMIT</button>
                </form>
            </S.addBody>
        )
    }
}

export default Add;