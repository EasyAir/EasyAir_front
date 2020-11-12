import logo from './logo.svg';
import ReactDom from 'react-dom';
import React, {Component} from 'react';
import './index.css'
/* import './intro.css' */
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';  
import Header from './components/header/heaer'
import Company from './components/Company/company'
import Issue from './components/Issue/issue';
import Schedule from './components/Schedule/schedule';
import Add from './components/Add/add';
import Intro from './components/Intro/intro'

function App() {
  var link = document.location.href;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Intro}></Route>
        <Route path="/heaer" component={Header}></Route>
        <Route path="/company"><Header></Header><Company></Company></Route>
        <Route path="/add"><Header></Header><Add></Add></Route>
        <Route path="/issue"><Header></Header><Issue></Issue></Route>
        <Route path="/schedule"><Header></Header><Schedule></Schedule></Route>
      </Switch>
    </div>
  );
}

export default App;
