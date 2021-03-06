import React, {Component} from 'react';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';  
import './intro.css'
import Kakao from 'react-kakao-login';
import img from './kakao.png'
import axios from 'axios';

window.onload=(params)=> {
  axios({ // 팀 입장코드 반환
    method: 'get',
    url: 'http://easyair.herokuapp.com/code',
    headers:{
      "Authorization": "Bearer " + window.localStorage.getItem("token") 
    }
  }).then((e)=>{
    console.log('팀 입장코드')
    console.log(e)
  }).catch((e)=>{
    console.log('팀 입장코드 에러')
    console.log(e)
  })
}

let token;
let team;
let locate;
class Intro extends Component{
    state={
        isLogin: false
    }
    loginWithKakao = () => { // 카카오 로그인 구현
        try {
          return new Promise((resolve, reject) => {
            if (!Kakao) {
              reject('Kakao 인스턴스가 존재하지 않습니다.')
            }
            window.Kakao.init('97539593073279dc0a725dbcbdda891c')
            window.Kakao.Auth.login({
              success: (auth) => {
                console.log('정상적으로 로그인 되었습니다.', auth)
                console.log(JSON.stringify(auth))
                this.setState({
                  isLogin: true
                })
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function(response) {
                        console.log(response);
                        console.log(response.kakao_account.email)
                        console.log(response.properties.nickname)

                        
                        axios({ // 로그인 정보 제출
                          method: 'post',
                          url:'http://easyair.herokuapp.com/auth',
                          headers:{
                            "Content-Type": "application/json"
                          },
                          data:{
                            "api_key" : "dsfsdfsdf",
                            "email" : response.kakao_account.email,
/*                             "phone" : "010-3333-3333", */
                            "name" : response.properties.nickname 
                          }
                        }).then((res)=>{
                          console.log('토큰 보여주기')
                          console.log(res);
                          token = res.data.access_token;
                          team = res.data.team_id;
                          console.log(token);
                          window.localStorage.setItem("token", token)
                          window.localStorage.setItem("team", team)
                         console.log(window.localStorage.getItem("token")) 

                        }).catch((err)=>{
                          console.log('토큰 에러')
                          console.log(err);
                        })
                        

                    },
                    fail: function(error) {
                        console.log(error);
                    }
                });
              },
              fail: (err) => {
                console.log('카카오 에러?')
                console.error(err)
              }
            })
          })
        } catch (err) {
          console.error(err)
        }
      }
    render() {
        return (
            <body>
                <div class="page1">
                    <div class="introduce">
                        <p><i class="fas fa-cubes"></i><a><i>E</i>asy<i>A</i>ir</a></p>
                        <p> 새로움을 창조하다, <a>E</a>asy<a>A</a>ir 에 오신 것을 환영합니다. <br /> 저희 사이트는
                공장 시스템을 체계적으로 관리/점검할 수 있도록 제작하였습니다.<br />
                아래의 버튼을 눌러 이용시 참고해 주세요.</p>
                        <button>설명보기</button>
                    </div>
                    <div class="loginBox">
                        <p>Welcome to <i>E</i>asy<i>A</i>ir</p>
                        <div class="loginInput">
                            <i class="fas fa-envelope-open-text"></i>
                            <input type="text" placeholder="이메일을 입력해주세요." />
                        </div>
                        <div class="loginInput">
                            <i class="fas fa-key"></i>
                            <input type="password" placeholder="비밀번호를 입력해주세요." />
                        </div>
                        <div class="loginButton">
                            <button>LOGIN</button>
{/*                            <button id="signup" className="button2">SIGNUP</button> */}
                          <Link to="/summary"><button onClick={this.loginWithKakao} className="kakaobutton"><img src={img}/> Kakao</button></Link>
                        </div>
                    </div>
                </div>
                <script src="./kakao.js"></script>
            </body>
        )
    }
}

export default Intro;