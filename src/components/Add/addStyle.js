import styled, { css } from 'styled-components';

const addBody = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-direction:column;
    div:first-child{
        font-family:Arial, Helvetica, sans-serif;
        width:580px;
        h2{
            color:#50C9BB;
        }
        h4{
            color:gray;
            font-weight:500;
        }
        h4:nth-of-type(2){
            color:tomato;
        }
    }
    button{
        margin-top:50px;
        width:110px;
        height:35px;
        background-color:transparent;
        border:1px solid #50C9BB;
        color:#50C9BB;
        margin-left:465px;
        outline:none;
        transition:0.8s;
        :hover{
            background-color:#50C9BB;
            color:white;
        }
    }
`
const inputCont = styled.div`
display:flex;
width:570px;
/* margin-right:115px; */
margin-top:30px;
div{
    display:flex;
flex-direction:column;
    a > i{
    color:tomato;
}
input{
    margin-top:10px;
    padding:5px 20px;
    height:30px;  
    border-radius:7px;
    background-color:rgb(227, 240, 238,0.3);  
    box-shadow: 0px 0px 3px gray;
    border:none;
    outline:none;
    color:gray;
    width:230px;
}
input:focus{
    box-shadow:0px 0px 7px #50C9BB;
}
}
`


export{
    addBody,
    inputCont
}
