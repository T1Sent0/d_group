import './Form.scss'

$('#form').submit(function (e) {

    let sendInfo = {
        login: $('input[name=login]').val(),
        password: $('input[name=password]').val()
    };
    $.ajax({
        url: "https://test.tenderhub.ru/api/login",
        data: sendInfo,
        type: "POST",
        crossDomain: true,
        dataType: "jsonp",
        success: function() {
            alert("Success")
        },
        error: function() {
            alert("Failed!")
        },
        beforeSend: function() {
            console.log("Перед отправкой");
            console.log("Перед отправкой");
            console.log($("input[name=login]").val());
            console.log($("input[name=password]").val())
        }
    });
    e.preventDefault()
});