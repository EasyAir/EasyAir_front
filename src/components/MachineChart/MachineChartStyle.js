import styled from 'styled-components'

const Background = styled.div`
width:100%;
height:85vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const MachineChart = styled.div`
width:900px;
height:570px;
overflow-y:scroll;
::-webkit-scrollbar{
    display:block;
}
table{
    width:100%;
    thead{
        overflow:auto;
        width:900px;  
    }
    th{
        background-color:#50C9BB;
            border:none;
            padding:20px 0;
            color:white;
            font-size:15px;
            font-weight:bold;
            overflow:hidden;
            border-radius:5px 5px 0px 0px; 
            position:sticky;
            top:0;
    }
    tr{
            width:25%;     
    }
    tbody{
        tr{
        background-color:rgb(230, 230, 230);
        color:gray;
        :hover{
            background-color:rgb(214, 219, 218);
        }
        :nth-of-type(2n){
            background-color:whitesmoke;
            :hover{
            background-color:rgb(214, 219, 218);
        }
        }
        td{
            padding:25px 10px;
            text-align:center;
        }
    }
    }
}
`
const Header = styled.header`
width:900px;
padding:15px 0;
display:flex;
justify-content:flex-start;
box-shadow:none;
font-size:1.1rem;
color:#50C9BB;
font-weight:bold;
`
const Thead = styled.div`
width:900px;
table{
    width:100%;
    thead{
        background-color:#50C9BB;
        overflow:hidden;
        width:900px;  
    }
    th{
            border:none;
            padding:20px 0;
            color:white;
            font-size:15px;
            font-weight:bold;
            overflow:hidden;
            border-radius:5px 5px 0px 0px; 
    }
    tr{
            width:25%;     
    }
}
`

export{
Background,
MachineChart
,Header
,Thead
}