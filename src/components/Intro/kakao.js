Kakao.init('a211b5c2df80a2bd789b3e988c50f77e');
// 카카오 로그인 버튼을 생성합니다.
Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    success: function (authObj) {
        /*         alert(JSON.stringify(authObj)); */
        location.href = "http://localhost:3002/company";
    },
    fail: function (err) {
        alert(JSON.stringify(err));
    }
});