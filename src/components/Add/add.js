import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import * as S from './addStyle';
import './add.css';

class InputIformation extends Component{
    render(){
        const {titleName,placeholder,widthVal} = this.props;
         return(
            <div>
            <a> {titleName} <i>*</i></a> 
        <input type="text"
        placeholder={placeholder}
        />
            </div>
        )
    }
}

class Add extends Component{
    render(){
        return(
            <S.addBody>
                <div>
                    <h2>New Company</h2>
                    <h4>- 새로운 회사 레포지토리를 생성합니다 -</h4>
                    <h4>( Create a new company repository )</h4>
                </div>
                <S.inputCont>
                    <InputIformation titleName="Name" placeholder="이름을 입력하세요"></InputIformation> 
                    <InputIformation titleName="Company" placeholder="회사명을 입력하세요" ></InputIformation> 
                </S.inputCont>
                <div className="createWarning">위 정보를 정확히 기입해 주세요. 수정할 수 없습니다.</div>
                <S.inputCont>
                    <InputIformation className="description"></InputIformation>
                </S.inputCont>
            </S.addBody>
        )
    }
}

export default Add;