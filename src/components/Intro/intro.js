import React, {Component} from 'react';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';  
import './intro.css'

class Intro extends Component {
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
                           <Link to="/heaer"><button id="signup" className="button2">SIGNUP</button></Link>
                        </div>
                        <a id="kakao-login-btn" style={{ marginTop: "30px" }}></a>
                        <a href="http://developers.kakao.com/logout"></a>
                    </div>
                </div>
                <script src="./kakao.js"></script>
            </body>
        )
    }
}

export default Intro;