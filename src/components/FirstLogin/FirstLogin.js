import React, {useState, Fragment, Component, state, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as F from './FirstLoginStyle'
import img from './첫번째배경.png'
import styled from 'styled-components';
import './border.css'

const First=()=>{
    let i = 0;
    const [wid, Cwid] = useState(0)
    function Deacrease(){
        console.log('sdf');
            let rep = setInterval(()=>{
                if(i==0){
                    clearInterval(rep);
                }
                else{
                    i--;
                }
                console.log(i)
            },5)
    }
   useEffect(()=>{ // 컴포넌트 첫 실행시 작동
        setInterval(()=>{
            Cwid(i);
            i++;
            if(i>220){
                Cwid(220)
                i=220;  
            }
                    
        },15)
    },[])
    const style={
        width: wid+'px',height:'45px', overflow:'hidden',marginBottom:'50px',
        marginRight:'300px'
    }
    return(
        <div>
            <F.InputContainer>
                <article>
                <div style={style}>
                <h3 className="blink"> 팀 이름을 <i>등록</i>해 주세요!</h3>
                </div>
                </article>
                <input type="text" placeholder="팀 이름을 입력해주세요!"/>
            </F.InputContainer>
            <img src={img}></img>
        </div>
    )
}

export default First;