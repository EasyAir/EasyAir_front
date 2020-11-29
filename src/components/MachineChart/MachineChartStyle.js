import styled from 'styled-components'

const Background = styled.div`
width:100%;
height:85vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const TableHeader = styled.div`
width:1000px;
border-bottom:2px solid #50C9BB;
display:flex;
justify-content:space-between;
padding:15px 20px;
a{
    font-weight:bold;
    color:#50C9BB;
}
`
const TableBody = styled.div`
width:1040px;
overflow:scroll;
height:600px;
display:flex;
flex-direction:column;
`
const Tr = styled.div`
width:90%;
height:40px;
/* border:1px solid rgb(184, 184, 184); */
box-shadow: 0px 0px 3px #50C9BB;
border-radius:10px;
margin-top:30px;
padding: 20px 30px;
display:flex;
margin-left:10px;
margin-bottom:10px;
div{
    display:flex;
    flex-direction:column;
    padding:0px 30px;
    justify-content:center;
    a{
        font-size:1rem;
        font-weight:bold;
        color:#50C9BB;
        :last-child{
            font-size:0.7rem;
            color:gray;
        }
    }
}
i{
    color:gray;
    font-size:2.3rem;
}
section{
    width:200px;
    display:flex;
    align-items:center;
    padding:0px 70px;
    a{
        color:gray;    
        i{
            font-size:18px;
            padding:0px 5px;
        }
    }
}
footer{
    width:100px;
    padding:0px 60px;
    display:flex;
    align-items:center;
    a{
        i{
            font-size:18px;
            padding:0px 5px;
        }
        color:black;
    }
}
`

export{
Background,
TableHeader,
TableBody,
Tr
}