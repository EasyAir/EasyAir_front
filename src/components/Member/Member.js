import React from 'react';
import * as M from './MemberStyle'

const Section =()=>{
    return(
        <section>
            <div></div>
            <h2>정지원</h2>
            <a>전화 : 010-1234-5678</a>
            <a href="">이메일 : jidole02@naver.com</a>
            <footer>
                <button>내보내기</button>
            </footer>
        </section>
    )
}

const Member = () => {
    return (
        <M.Background>
            <M.MainBox>
                <h2>Member List</h2>
                <h4>- 팀의 직원을 관리할 수 있습니다. -</h4>
                <h4>( Displays a list of machines requiring inspection. )</h4>
                <article>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                </article>
            </M.MainBox>
        </M.Background>
    )
}

export default Member;