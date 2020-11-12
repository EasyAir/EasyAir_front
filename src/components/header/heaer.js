import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Header extends Component{
    render(){
        return(
            <header>
                <div className="logo">
                <i class="fas fa-cubes"></i>
                <h2><i>E</i>asy<i>A</i>ir</h2>
                </div>
                <div className="menu">
                    <Link to="/company"><p className="p"><i class="fas fa-building"></i><a><i>회</i>사관리</a></p></Link>
                    <Link to="/add"><p className="p"><i class="fas fa-user-plus"></i><a><i>회</i>사추가</a></p></Link>
                    <Link to="/issue"><p className="p"><i class="fas fa-exclamation-triangle"></i><a><i>긴</i>급</a></p></Link>
                    <Link to="/schedule"><p className="p"><i class="fas fa-tasks"></i><a><i>스</i>케쥴</a></p></Link>
                    <a></a>
                </div>
                <div className="user">
                    <button>로그아웃</button>
                    <i class="fas fa-user-circle"></i>
                </div>
            </header>
        );
    }
}

export default Header;