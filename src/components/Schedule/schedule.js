import React, {useState, Fragment, Component, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './schedule.css'
import * as S from './scheduleStyle'
import axios from 'axios'

function Schedule() {
  const factoryLength = window.localStorage.getItem("factoryLength")
  const memberLength = window.localStorage.getItem("memberLength")
  const [code, setCode] = useState('')
  useEffect(()=>{
    axios({
      method:"get",
      url:"http://easyair.herokuapp.com/code",
      headers:{
        "Authorization": "Bearer " + window.localStorage.getItem("token")
      },
      data:{
  
      }
    }).then((e)=>{
      console.log("팀 입장코드 반환 성공");
      console.log(e.data.code)
      setCode(e.data.code)
    }).catch((e)=>{
      console.log("팀 입장코드 반환 에러")
      console.log(e)
    })
  },[code]) // useState code 값이 바뀔 때마다 마운트됨
  function changeTeamCode() {
      axios({
        method:'post',
        url:"http://easyair.herokuapp.com/code",  
        headers:{
          "Authorization": "Bearer " + window.localStorage.getItem("token")
        },
        data:{}
      }).then((e)=>{
        console.log("팀코드 변경 성공");
        console.log(e)
        setCode(e.data.code)
      }).catch((e)=>{
        console.log("팀코드 변경 에러")
        console.log(e)
      })
    }
  return (
    <div>
      <S.teamBody>
                <div>
                    <h2>Team management</h2>
                    <h4>- 매니저로써 팀을 관리할 수 있습니다. -</h4>
                    <h4>( You can manage the team why you are manager )</h4>
                </div>
                <article>
                  <div>
                    <a>등록된 공장</a>
                     <a>{factoryLength} 개</a>
                  </div>
                  <div>
                  <a>포함된 직원</a>
                     <a>{memberLength} 명</a>
                  </div>
                  <div>
                    <a href="">팀 입장코드</a>
                    <a href="">{code}</a>
                  </div>
                </article>
                <footer>
                  <button onClick={changeTeamCode}>팀 입장코드 변경</button>
                </footer>
      </S.teamBody>
    </div>
  );
}

export default Schedule;