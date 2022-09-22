//음악 전체
function show_music_all() {
    $('#music_table').empty()
    $.ajax({
        type: "GET",
        url: "/music1",
        data: {},
        success: function (response) {
            let rows = response['musics1']
            for (let i = 0; i < rows.length; i++) {
                let rank = rows[i]['rank']
                let title = rows[i]['title']
                let artist = rows[i]['artist']
                let num = rows[i]['num']
                let done = rows[i]['done']
                let temp_html = ''
                if (done == 0) {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i class="fa-solid fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i class="fa-solid fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });

    $.ajax({
        type: "GET",
        url: "/music2",
        data: {},
        success: function (response) {
            let rows = response['musics2']
            for (let i = 0; i < rows.length; i++) {
                let rank = rows[i]['rank']
                let title = rows[i]['title']
                let artist = rows[i]['artist']
                let num = rows[i]['num']
                let done = rows[i]['done']
                let temp_html = ''
                if (done == 0) {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i class="fa-solid fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i class="fa-fa-solid fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });
    $.ajax({
        type: "GET",
        url: "/music3",
        data: {},
        success: function (response) {
            let rows = response['musics3']
            for (let i = 0; i < rows.length; i++) {
                let rank = rows[i]['rank']
                let title = rows[i]['title']
                let artist = rows[i]['artist']
                let num = rows[i]['num']
                let done = rows[i]['done']
                let temp_html = ''
                if (done == 0) {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i class="fa-solid fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i class="fa-fa-solid fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });
}

function warning() {
    alert("로그인 해야 사용 가능합니다.")
}

// 음악 2000년도
function show_music_2000() {
    $('#music_table').empty()
    $.ajax({
        type: "GET",
        url: "/music1",
        data: {},
        success: function (response) {
            let rows = response['musics1']
            for (let i = 0; i < rows.length; i++) {
                let rank = rows[i]['rank']
                let title = rows[i]['title']
                let artist = rows[i]['artist']
                let num = rows[i]['num']
                let done = rows[i]['done']
                let temp_html = ''
                if (done == 0) {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="warning()" class="fa-regular fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="warning()" class="fa-regular fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });
}

// 음악 2010년도
function show_music_2010() {
    $('#music_table').empty()
    $.ajax({
        type: "GET",
        url: "/music2",
        data: {},
        success: function (response) {
            let rows = response['musics2']
            for (let i = 0; i < rows.length; i++) {
                let rank = rows[i]['rank']
                let title = rows[i]['title']
                let artist = rows[i]['artist']
                let num = rows[i]['num']
                let done = rows[i]['done']
                let temp_html = ''
                if (done == 0) {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="warning()" class="fa-regular fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="warning()" class="fa-regular fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });
}

// 음악 2020년도
function show_music_2020() {
    $('#music_table').empty()
    $.ajax({
        type: "GET",
        url: "/music3",
        data: {},
        success: function (response) {
            let rows = response['musics3']
            for (let i = 0; i < rows.length; i++) {
                let rank = rows[i]['rank']
                let title = rows[i]['title']
                let artist = rows[i]['artist']
                let num = rows[i]['num']
                let done = rows[i]['done']
                let temp_html = ''
                if (done == 0) {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="warning()" class="fa-regular fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="warning()" class="fa-regular fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });
}

// <!--   회원가입 클라이언트!! -->//
function sign_up() {
    let username = $("#input-username").val()
    let password = $("#input-password").val()
    let password2 = $("#input-password2").val()
    let email = $("#input-email").val()
    let domain = $("#input-domain").val()
    let phone = $("#input-phone").val()
    console.log(username, password, password2, email, domain, phone)


    if ($("#help-id").hasClass("is-danger")) {
        alert("아이디를 다시 확인해주세요.")
        return;
    } else if (!$("#help-id").hasClass("is-success")) {
        alert("아이디 중복확인을 해주세요.")
        return;
    }

    if (password == "") {
        $("#help-password").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-password").focus()
        return;
    } else if (!is_password(password)) {
        $("#help-password").text("비밀번호의 형식을 확인해주세요. 영문과 숫자 필수 포함, 특수문자(!@#$%^&*) 사용가능 8-20자").removeClass("is-safe").addClass("is-danger")
        $("#input-password").focus()
        return
    } else {
        $("#help-password").text("사용할 수 있는 비밀번호입니다.").removeClass("is-danger").addClass("is-success")
    }
    if (password2 == "") {
        $("#help-password2").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-password2").focus()
        return;
    } else if (password2 != password) {
        $("#help-password2").text("비밀번호가 일치하지 않습니다.").removeClass("is-safe").addClass("is-danger")
        $("#input-password2").focus()
        return;
    } else {
        $("#help-password2").text("비밀번호가 일치합니다.").removeClass("is-danger").addClass("is-success")
    }


    $.ajax({
        type: "POST",
        url: "/sign_up/save",
        data: {
            username_give: username,
            password_give: password,
            email_give: email,
            domain_give: domain,
            phone_give: phone
        },
        success: function (response) {
            alert("회원가입을 축하드립니다!")
            window.location.replace("/")
        }
    });

}

// 회원가입 모달 열기&닫기
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .level-item2') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});


// <!--   아이디 중복확인 기능 클라이언트 -->//
function check_dup() {
    let username = $("#input-username").val()
    console.log(username)
    if (username == "") {
        $("#help-id").text("아이디를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-username").focus()
        return;
    }
    if (!is_nickname(username)) {
        $("#help-id").text("아이디의 형식을 확인해주세요. 영문과 숫자, 일부 특수문자(._-) 사용 가능. 2-10자 길이").removeClass("is-safe").addClass("is-danger")
        $("#input-username").focus()
        return;
    }
    $("#help-id").addClass("is-loading")
    $.ajax({
        type: "POST",
        url: "/sign_up/check_dup",
        data: {
            username_give: username
        },
        success: function (response) {

            if (response["exists"]) {
                $("#help-id").text("이미 존재하는 아이디입니다.").removeClass("is-safe").addClass("is-danger")
                $("#input-username").focus()
            } else {
                $("#help-id").text("사용할 수 있는 아이디입니다.").removeClass("is-danger").addClass("is-success")
            }
            $("#help-id").removeClass("is-loading")

        }
    });
}


//이메일 중복 확인 및 올바른 구역에 @ 포함
function check_mail() {
    let email = $("#input-email").val()
    let domain = $("#input-domain").val()
    console.log(email, domain)
    if (email == "") {
        $("#help-email").text("이메일을 올바르게 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-email").focus()
        return;
    }
    if (domain == "") {
        $("#help-email").text("이메일을 올바르게 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-domain").focus()
        return;
    }
    if (!is_domain(domain)) {
        $("#help-email").text("이메일 형식을 확인해 주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-domain").focus()
        return;
    }
    $("#help-email").addClass("is-loading")
    $.ajax({
        type: "POST",
        url: "/sign_up/check_email",
        data: {email_give: email, domain_give: domain},
        success: function (response) {

            if (response["exists2"]) {
                $("#help-email").text("이미 가입내역이있는 이메일입니다.").removeClass("is-safe").addClass("is-danger")
                $("#input-email").focus()
                $("#input-domain").focus()
            } else {
                $("#help-email").text("올바른 형식의 이메일입니다.").removeClass("is-danger").addClass("is-success")
            }
            $("#help-email").removeClass("is-loading")

        }
    });
}

// <!--   아이디 비밀번호 정규 표현식! 들어갈수 있는 문자, 단어 길이 등 조건을 표현 -->//
function is_nickname(asValue) {
    var regExp = /^(?=.*[a-zA-Z])[a-zA-Z0-9_.]{2,10}$/;
    return regExp.test(asValue);
}

function is_password(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    return regExp.test(asValue);
}

function is_domain(asValue) {
    var regExp = /^(?=.*[a-zA-Z])[a-zA-Z0-9_.]{2,10}$/;
    return regExp.test(asValue)
}

// end, Register

// 로그인 모달 오픈 버튼 & 모달 닫기
function open_toggle() {
    console.log('로그인 버튼 클릭');
    $('#modal-js-example-2').toggleClass("is-active")
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, #login_off') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

function sign_in() {
    let username = $("#input-username2").val()
    let password = $("#input-password3").val()

    if (username == "") {
        $("#help-id-login2").text("아이디를 입력해주세요.")
        $("#input-username2").focus()
        return;
    } else {
        $("#help-id-login").text("")
    }

    if (password == "") {
        $("#help-password-login").text("비밀번호를 입력해주세요.")
        $("#input-password3").focus()
        return;
    } else {
        $("#help-password-login").text("")
    }
    $.ajax({
        type: "POST",
        url: "/sign_in",
        data: {
            username_give: username,
            password_give: password
        },
        success: function (response) {
            if (response['result'] == 'success') {
                window.location.href = '/login'
                alert("로그인 완료")
            } else {
                console.log(response['token'])
                alert("로그인 실패")
            }
        }
    });
}