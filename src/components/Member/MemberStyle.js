import styled, { css } from 'styled-components';

const Background = styled.div`
width:100%;
height:85vh;
display:flex;
justify-content:center;
align-items:center;
`

const MainBox = styled.div`
width:1100px;
height:700px;
overflow:hidden;
article{
    width:200%;
    height:500px;
    display:flex;
    align-items:center;
    overflow:scroll;
    section{
        width:320px;
        height:400px;
        border:1px solid #e1e4e8;
        margin-left:60px;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow: 0px 0px 7px whitesmoke;
        flex-direction:column;
        :first-child{
            margin-left:0;
        }
        div{ /* 나중에 img로 수정 */
            width:150px;
            height:150px;
            border-radius:80%;
            overflow:hidden;
            background-color:whitesmoke;
        }
        a{
            color:#50C9BB;
            font-weight:bold;
            :nth-of-type(2){
                color:gray;
                font-size:13px;
                margin-top:5px;
            }
        }
        footer{
            padding: 20px 0;
            button{
                background-color:whitesmoke;
                border:1px solid gray;
                outline:none;
                transition:0.5s;
                border-radius:5px;
                :hover{
                    background-color:gray;
                    color:whitesmoke;
                }
            }
        }
    }
}
`

export{
    Background,
    MainBox
}