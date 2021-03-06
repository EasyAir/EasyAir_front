import styled, { css } from 'styled-components';

const InputContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:absolute;
article{
    width:540px;
    border:none;
    box-shadow:none;
    height: 70px;
}
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
button{
    margin-top:20px;
    padding:5px 20px;
    background-color:white;
    border:2px solid white;
    color:#50C9BB;
    border-radius:5px;
    font-weight:bold;
    cursor: pointer;
    outline:none;
    :hover{
        box-shadow:0px 0px 3px gray;
    }
}
`

export{
    InputContainer
}