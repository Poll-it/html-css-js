$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        axios.request({
            url: "http://localhost/pull-it/php-api/users",
            method: 'GET',
            data: {
                nickname: $('#nickname').val(),
                password: $('#password').val()
            },
            responseType: 'json',
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQb2xsLWl0Iiwic3ViIjoxLCJpYXQiOjE1ODcyMzg2NDUsImV4cCI6MTU4ODQ0ODI0NX0.YhZ34R_lijbHwhoowS6Dge2MGV34Euo_qecr5Xth940`
            }
        }).then(function (response) {
            $('.toast').toast('show');
            console.log(response.data);
        }).catch(error => {
            console.log(error.response)
        })
    });
})