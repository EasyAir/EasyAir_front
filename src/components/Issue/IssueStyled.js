import styled, { css } from 'styled-components';

const Body = styled.div`
width:100%;
height:85vh;
display:flex;
justify-content:center;
align-items:center;
`
const Article = styled.div`
width:900px;
height:600px;
`
const Header = styled.div`
width:100%;
h2{
    color:#50C9BB;
}
h4{
    color:gray;
    font-weight:500;
    font-family: Arial, Helvetica, sans-serif;
    :last-child{
        color:tomato;
    }
}
`
const Section = styled.div`
width:300px;
height:250px;
border-radius:7px;
margin-top:30px;
padding:30px 30px;
background-color:rgb(251, 251, 251);
:last-child{
    margin-left:50px;
}
a{
    padding: 0px 3px ;
    color:#50C9BB;
    :first-child{
        font-size:1.5rem;
        color:black;
        font-weight:bold;
    }
    :nth-of-type(2){
        font-size:0.7rem;
    }
}
hr{
    width:300px;
    margin-top:20px;
    border: 1px dashed gray;
    height:0.2px;
}
h5{
    font-family:Arial, Helvetica, sans-serif;
    margin-top:30px;
    i{
        color:#50C9BB;
    }
}
button{
    float:right;
    width:100px;
    height:30px;
    margin-top:10px;
    background-color:rgb(252, 252, 252);
    border:1px solid black;
    margin-right:20px;
    border:1px solid #50C9BB;
    color:#50C9BB;
    transition:1s;
    outline:none;
    :hover{
        background-color:#50C9BB;
        color:white;
    }
}
`

export{
Body,
Article,
Header,
Section
}