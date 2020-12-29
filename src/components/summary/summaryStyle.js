import styled,{css} from 'styled-components'

const SummaryBackground = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`
const Container = styled.article`
width:1600px;
height:800px;
display:flex;
justify-content:space-between;
`
const ProfileBox = styled.section`
width:300px;
height:50%;
display:flex;
flex-direction:column;
align-items:center;
img{
    width:220px;
    height:220px;
    border-radius:80%;
    overflow:hidden;
    object-fit:cover; 
}
h1{
    margin-top:30px;
    margin-bottom:8px;
    color:rgb(50,50,50);
    font-size:1.3rem; 
}
a{
    color:#50C9BB;
    font-size:13px;
}
button{
    width:230px;
    height:30px;
    border:1px solid rgb(180,180,180);
    border-radius:10px;
    background-color:transparent;
    margin-top:30px;
    box-shadow: 4px 4px 5px whitesmoke;
    color:rgb(180,180,180);
    font-size:13px;
    outline:none;
}
`

const ScrollMenu = styled.section`
width:750px;
height:640px;
overflow:scroll;
display:flex;
flex-direction:column;
align-items:center;
`

const SubMenu = styled.section`
width:350px;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
div{
    width:100%;
    height:200px;
    border:1px solid #50C9BB;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
        font-size:13px;
        color:#50C9BB;
        padding:5px 0;
        :nth-of-type(2){
            color:gray;
            font-size:11px;
        }
    }
    button{
        width:220px;
        height:30px;
        margin-top:20px;
        border-radius:24px;
        border:1px solid rgb(190,190,190);
        background-color:transparent;
        outline:none;
        color:rgb(190,190,190);
    }
}
`

const checkMenu = styled.div`
    width:740px;
    height:80px;
    border-radius:13px;
    border:1px solid #909090;
    box-shadow:5px 5px 3px whitesmoke; 
    margin-top:40px;
    display:flex;
    justify-content:space-between;
    :first-child{
        margin-top:0;
    }   
    div{
        padding:18px 30px;
        display:flex;
        flex-direction:column;
        a{
            :first-child{
                font-size:19px;
                color:#50C9BB;
            }
            :nth-of-type(2){
                font-size:12px;
                margin-top:5px;
                color:gray;
            }
        }
    }
`
const Title = styled.div`
width:740px;
h5{
    margin-bottom:0px;
    font-weight:500;
    color:gray;
    margin-top:50px;
}
`

const ChangeMenu = styled.div`
width:700px;
height:70px;
    border:1px solid #909090;
    border-left:5px solid #50C9BB;
    box-shadow:5px 5px 3px whitesmoke; 
    margin-top:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 20px;
    :first-child{
        margin-top:0;
    }   
    img{
        width:40px;
        height:40px;
        border-radius:80%;
        overflow:hidden;
    }
    div{
        div{
            a{
                padding:1px 20px;
                font-size:12px;
                color:#50C9BB;
                
                :first-child{
                    font-size:15px;
                    color:gray;
                }
            }
        }
    }
`

export{
    SummaryBackground,
    Container,
    ProfileBox,
    ScrollMenu,
    SubMenu,
    checkMenu,
    Title,
    ChangeMenu
}