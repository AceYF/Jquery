$(document).ready(function () {
    var dataUsu = {
        "nome": getCookie("nome"),
        "idade": getCookie("idade"),
        "turma": getCookie("turma")
    }
    console.log(dataUsu.nome)
    $("#subtitle1").html(dataUsu.nome);
    $("#subtitle2").html(dataUsu.idade);
    $("#subtitle3").html(dataUsu.turma);

});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}