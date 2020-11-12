import styled, { css } from 'styled-components';

const addBody = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;   
`

const addWriting = styled.div`
    width: 600px;
    height: 600px;
/*     box-shadow: 0px 0px 7px rgb(194, 194, 194,0.4); */
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid rgb(194, 194, 194,0.8);
    p{
        font-family:'Times New Roman', Times, serif;
        color:#50C9BB;
        margin-top:50px;
        input{
        width: 350px;
        padding: 5px 5px;
        border:none;
        border-bottom:1px solid #50C9BB;
/*         outline:1px solid #50C9BB; */
        margin-left:5px;
        margin-top:10px;
        outline:none;       
    }
    }
`

const InputWarning = styled.div`
width:250px;
height:300px;
margin-left:50px;
border:1px solid rgb(194, 194, 194,0.8);
border-radius:5px;
`


export{
    addBody,
    addWriting,
    InputWarning
}