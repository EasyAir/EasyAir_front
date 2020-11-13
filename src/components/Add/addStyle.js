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
        width:1000px;
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
`
const inputCont = styled.div`
display:flex;
width:570px;
margin-right:415px;
margin-top:20px;
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
