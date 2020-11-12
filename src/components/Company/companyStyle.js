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
width:310px;
height:450px;
padding:0 20px;
/* background-color:#50C9BB; */
border-radius:7px;
box-shadow: 0px 0px 8px whitesmoke;
overflow:hidden;
margin-top:20px;
img{
    width:100%;
    height:200px;
    margin-top:30px;
}
/* div:nth-of-type(2){
    margin-top:20px;
    color:gray;
    font-size:13px;
} */
div:nth-of-type(2){
    margin-top:20px;
    color:#50C9BB;
    font-size:14px;
    font-weight:bold;
    font-family:Arial, Helvetica, sans-serif;
}
div:first-child{
    display:flex;
    margin-top:30px;    
    a{
        font-size:1.3rem;
        color:gray;
    }
}
`

export{
    Body,
Container
}