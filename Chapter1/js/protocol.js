










function show_music_allTETETETE() {
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
                let temp_html = `<tr>
                                        <td> </td>
                                        <td>${title}</td>
                                        <td>${artist}</td>
                                        <td class="comment_move" onclick="location.href='comment.html'">댓글남기기 👈</td>
                                        <td class="comment_move" onclick="location.href=''">❤️</td>
                                    </tr>`
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
                let temp_html = `<tr>
                                        <td> </td>
                                        <td>${title}</td>
                                        <td>${artist}</td>
                                        <td class="comment_move" onclick="location.href='comment.html'">댓글남기기 👈</td>
                                        <td class="comment_move" onclick="location.href=''">❤️</td>
                                    </tr>`
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
                let temp_html = `<tr>
                                        <td> </td>
                                        <td>${title}</td>
                                        <td>${artist}</td>
                                        <td class="comment_move" onclick="location.href='comment.html'">댓글남기기 👈</td>
                                        <td class="comment_move" onclick="location.href=''">❤️</td>
                                    </tr>`
                $('#music_table').append(temp_html)
            }
        }
    });
}

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
                let temp_html = `<tr>
                                        <td>${rank}</td>
                                        <td>${title}</td>
                                        <td>${artist}</td>
{#                                        <td class="comment_move" onclick="location.href='comment.html'">댓글남기기 👈</td>#}
                                        <td class="comment_move" onclick="fnMoveToComment()">댓글남기기 👈</td>
                                        <td class="comment_move" onclick="location.href=''">❤️</td>
                                    </tr>`
                $('#music_table').append(temp_html)
            }
        }
    });
}

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
                let temp_html = `<tr>
                                        <td>${rank}</td>
                                        <td>${title}</td>
                                        <td>${artist}</td>
                                        <td class="comment_move" onclick="location.href='comment.html'">댓글남기기 👈</td>
                                        <td class="comment_move" onclick="location.href=''">❤️</td>
                                    </tr>`
                $('#music_table').append(temp_html)
            }
        }
    });
}

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
                let temp_html = `<tr>
                                        <td>${rank}</td>
                                        <td>${title}</td>
                                        <td>${artist}</td>
                                        <td class="comment_move" onclick="location.href='comment.html'">댓글남기기 👈</td>
                                        <td class="comment_move" onclick="location.href=''">❤️</td>
                                    </tr>`
                $('#music_table').append(temp_html)
            }
        }
    });
}

function fnMoveToComment() {
    console.log('함수 진입');

    var songID = 1001;

    $.ajax({
        type: "POST",
        url: "경로/commont", // ㅈ ㅓurl 로 이동시키면서
        data: songID,
        dataType: json,
        success: function (response) {

        }
    });
}