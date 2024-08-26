$(document).ready(function () {
    //관리자 로그인 검증
    $("#adminform").submit(function (e) {
        const adminname = $("#adminname").val();
        const adminpass = $("#adminpass").val();

        if (adminname.trim() === "" || adminpass.trim() === "") {
            e.preventDefault();
            alert("관리자 아이디 또는 비밀번호를 입력하세요.");
        }
    });

    

});