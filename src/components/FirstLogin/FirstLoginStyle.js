import styled, { css } from 'styled-components';

const InputContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:absolute;
input{
    width:500px;
    height:50px;
    padding:0px 20px;
    border-radius:24px;
    border:none;
    background-color:rgb(94, 190, 184);
    outline:none;
    color:white;
    :focus{
        border:2px solid white;
        background-color:rgb(120, 190, 186);
    }
    ::placeholder{
        color:white;
    }
}
h3{
    color:black;
    i{
        color:#50C9BB;
    }
}
`

export{
    InputContainer
}