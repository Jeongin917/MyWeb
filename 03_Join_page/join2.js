
// 회원가입 페이지 유효성 검사

function joinCheck() {
    let id = document.getElementById("id").value.trim();
    let password = document.getElementById("pw").value.trim();
    let name = document.getElementById("full_name").value.trim();
    let email = document.getElementById("email1").value.trim();
    let tel = document.getElementById("number").value.trim();
    var frm2 = document.getElementById("form");

    if(frm2.id === null || id === '') {
        alert("아이디를 입력하세요.");
        return;
    }

    if(frm2.password === null || password === '') {
        alert("비밀번호를 입력하세요.");
        return;
    }

    if(frm2.name === null || name === '') {
        alert("이름을 입력하세요.");
        return;
    }

    if(frm2.email === null || email === '') {
        alert("이메일을 입력하세요.");
        return;
    }
    let reg_email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!reg_email.test(email)) {
        alert("유효하지 않은 이메일 형식입니다.");
        return;
    }

    if(frm2.number === null || tel === '') {
        alert("전화번호를 입력하세요.");
        tel.focus();
        return;
    }

    let reg_tel = /^\d{3}\d{3,4}\d{4}$/;
    if(!reg_tel.test(tel)) {
        alert("유효하지 않은 전화번호 형식입니다.");
        return;
    }

    frm2.submit();
}
