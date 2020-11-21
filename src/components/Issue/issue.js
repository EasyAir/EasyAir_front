import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import * as I from './IssueStyled'
import './Issue.css'

const Container=()=>{
    return(
        <I.Section>
            <a href="">A12D345</a> <a href="">Name</a>
            <hr />
            <h5><i style={{ paddingRight: '70px' }}>- Serial_Number</i> a1212312ds</h5>
            <h5><i style={{ paddingRight: '110px' }}>- Installed</i>  2020-11-18</h5>
            <h5><i style={{ paddingRight: '105px' }}>- Made_By</i> 광양 신선건설</h5>
            <button>점검 완료</button>
        </I.Section>
    )
}

const Issue=()=>{
    return(
        <I.Body>
            <I.Article>
                <I.Header>
                    <h2>Check Machines</h2>
                    <h4>- 점검이 필요한 기계 목록을 표시합니다. -</h4>
                    <h4>( Displays a list of machines requiring inspection. )</h4>
                </I.Header>
                <div style={{display:'flex'}}>
                <Container></Container>
                <Container></Container>
                </div>
            </I.Article>
        </I.Body>
    )
}

export default Issue;