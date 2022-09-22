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
                            <td><i class="fa-regular fa-heart"></i></td>
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
                            <td><i class="fa-regular fa-heart"></i></td>
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
                            <td><i class="fa-regular fa-heart"></i></td>
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
                            <td><i onclick="genie_2000_like(${num})" class="fa-regular fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="genie_2000_dislike(${num})" class="fa-solid fa-heart"></i></td>
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
                            <td><i onclick="genie_2010_like(${num})" class="fa-regular fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="genie_2010_dislike(${num})" class="fa-solid fa-heart"></i></td>
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
                            <td><i onclick="genie_2020_like(${num})" class="fa-regular fa-heart"></i></td>
                        </tr>`
                } else {
                    temp_html = `<tr>
                            <td>${rank}</td>
                            <td>${title}</td>
                            <td>${artist}</td>
                            <td><i onclick="genie_2020_dislike(${num})" class="fa-solid fa-heart"></i></td>
                        </tr>`
                }
                $('#music_table').append(temp_html)
            }
        }
    });
}


function genie_2000_like(num) {
    $.ajax({
        type: "POST",
        url: "/genie_2000/like",
        data: {num_give: num},
        success: function (response) {
            window.location.reload()
        }
    });
}

function genie_2010_like(num) {
    $.ajax({
        type: "POST",
        url: "/genie_2010/like",
        data: {num_give: num},
        success: function (response) {
            window.location.reload()
        }
    });
}

function genie_2020_like(num) {
    $.ajax({
        type: "POST",
        url: "/genie_2020/like",
        data: {num_give: num},
        success: function (response) {
            window.location.reload()
        }
    });
}


function genie_2000_dislike(num) {
    $.ajax({
        type: "POST",
        url: "/genie_2000/dislike",
        data: {num_give: num},
        success: function (response) {
            window.location.reload()
        }
    });
}

function genie_2010_dislike(num) {
    $.ajax({
        type: "POST",
        url: "/genie_2010/dislike",
        data: {num_give: num},
        success: function (response) {
            window.location.reload()
        }
    });
}

function genie_2020_dislike(num) {
    $.ajax({
        type: "POST",
        url: "/genie_2020/dislike",
        data: {num_give: num},
        success: function (response) {
            window.location.reload()
        }
    });
}

<!-- 포스트 입력 -->

        <!-- 포스트 입력 -->

        function post() {
            let nickname = $('#input-post2').val()
            let post = $('#input-post').val()
            $.ajax({
                type: 'POST',
                url: '/posting',
                data: {comment_give: post, nickname_give: nickname},
                success: function (response) {
                    if (post == '') {
                        alert("포스트를 입력해주세요")
                    } else if (nickname == '') {
                        alert("닉네임을 입력해주세요")
                    } else {
                        alert(response['msg'])
                    window.location.reload()
                    }

                }
            });
        }

        function show_post() {
            // $('#comment-content-box').remove()
            $.ajax({
                type: 'GET',
                url: '/comment',
                data: {},
                success: function (response) {
                    // let length = response['comments'].length;
                    let rows = response['comments'];
                    console.log(rows);
                    for (let i = 0; i < rows.length; i++) {
                        let nickname = rows[i]['nickname']
                        let comment = rows[i]['comment']
                        let temp_html = `<div class="box" id="comment-card">
                                            <article class="media">
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>${nickname}</strong>
                                                            <br>
                                                            <p>${comment}</p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>`;
                        $('#post-box').append(temp_html)
                    }

                }
            });
        }
