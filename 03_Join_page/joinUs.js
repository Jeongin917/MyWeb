// 회원가입 페이지 유효성 검사

function joinCheck() {
    let id = document.getElementById("id").value.trim();
    let password = document.getElementById("pw").value.trim();
    var frm2 = document.getElementById("name");

    if (frm2.id === null || id === '') {
        alert("아이디를 입력하세요.");
        return;
    }

    if (frm2.password === null || password === '') {
        alert("비밀번호를 입력하세요.");
        return;
    }

    location.href='../index.html';
}
