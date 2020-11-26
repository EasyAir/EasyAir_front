import styled, { css } from 'styled-components';

const Body = styled.div`
padding:4vw 18vw;
height:83vh;
display:flex;
/* justify-content:space-between; */
align-items:center;
flex-direction:column;
`

const Container = styled.div`
width:300px;
height:450px;
padding:0 20px;
/* background-color:#50C9BB; */
border-radius:7px;
box-shadow: 0px 0px 8px whitesmoke;
overflow:hidden;
margin-top:20px;
margin-left:30px;
img{
    width:90%;
    height:200px;
    margin-top:30px;
    margin-left:5%;
    border-radius:10px; 
}
div:nth-of-type(2){
    margin-top:20px;
    color:#50C9BB;
    font-size:14px;
    font-weight:bold;
    font-family:Arial, Helvetica, sans-serif;
}
div:nth-of-type(3){
    margin-top:5px;
    color:gray;
    font-size:12px;
    font-family:Arial, Helvetica, sans-serif;
}
div:nth-of-type(4){
    float:right;
    margin-top:30px;
    margin-right:20px;
    button{
        border:1px solid #50C9BB;
        background-color:transparent;
        width:80px;
        height:30px;
        outline:none;
        color:#50C9BB;
    }
}
div:first-child{
    display:flex;
    margin-top:30px;    
    a{
        font-size:1.3rem;
        color:gray;
        color:black;
        font-weight:bold;
    }
}
`

const Footer = styled.div`
width:1200px;
padding:20px 0;
display:flex;
justify-content:flex-end;
    button{
    width:120px;
    height:30px;
    background-color:white;
    border:1px solid #50C9BB;
    color:#50C9BB;
    border-radius:5px;
    outline:none;
    :hover{
        box-shadow: 0px 0px 5px #50C9BB;
    }
}

`

export{
    Body,
Container
,Footer
}