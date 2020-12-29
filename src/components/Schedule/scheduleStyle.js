import styled, {css} from 'styled-components'

const teamBody = styled.div`
width:100%;
height:83vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
div{
    width:1000px;
    h2{
        color:#50C9BB;
    }
    h4{
        color:gray;
        font-weight:500;
        :nth-of-type(2){
            color:tomato;
        }
    }
}
article{
    width:1000px;
    height:180px;
    display:flex;
    justify-content:space-between;
    div{
        width:300px;
        height:100px;
        border-radius:8%;
        box-shadow:0px 3px 7px #c7fff8;
        border:1px solid whitesmoke;
        margin-top:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        a{
            color:#50C9BB;
            font-size:18px;
            font-weight:bold;
            :nth-of-type(2){
                color:gray;
                font-size:15px;
                font-weight:500;
            }
        }
    }
}
footer{
    width:1000px;
    padding:50px 0;
    display:flex;
    flex-direction:column;
    justify-content:end;   
    flex-direction:row;
    a{
        color:gray;
        margin-top:20px;
        font-size:13px;
        font-weight:500;
    }
    button{
        padding:10px 20px;
        width:150px;
        border:1px solid red;
        margin-top:20px;
        background-color:transparent;
        color:red;
        border-radius:5px;
        transition:0.5s;
        outline:none;
        :hover{
            color:white;
            background-color:red;
        }
    }
}
`

export{
    teamBody
}