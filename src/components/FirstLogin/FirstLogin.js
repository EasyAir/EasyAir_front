import React, {useState, Fragment, Component, state} from 'react';
import { Link } from 'react-router-dom';
import * as F from './FirstLoginStyle'
import img from './첫번째배경.png'

const First=()=>{
    let i = 0;
    const [wid, Cwid] = useState(0)
    const [bod, Cbod] = useState(1)
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
            },15)
    }
    window.onload=function(){
        setInterval(()=>{
                    Cwid(i);
                    i++;
                    if(i==220){
                        Deacrease();
                    }
                    if(bod==1){
                        Cbod('sfsdf')
                        console.log(bod)
                    }
                    else{
                        console.log('sdfs')
                        Cbod(1)
                    }
        },20)
    }
    return(
        <div>
            <F.InputContainer>
                <div style={{width: wid+'px',height:'45px', overflow:'hidden',marginBottom:'50px'}}>
                <h3 style={{borderRight: bod + 'px solid black'}}>팀 이름을 <i>등록</i>해 주세요!</h3>
                </div>
                <input type="text" placeholder="팀 이름을 입력해주세요!"/>
            </F.InputContainer>
            <img src={img}></img>
        </div>
    )
}

export default First;