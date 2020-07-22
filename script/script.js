$(document).ready(function () {
    $('#formularioCadastro').on('submit', function (e) {
        {
            var erro = false;
            var dataUsu = {
                "nome": $("#nome").val(),
                "idade": $("#idade").val(),
                "turma": $("#turma").val()
            }
            document.cookie = "nome="+$('#nome').val();
            document.cookie = "idade="+$("#idade").val();
            document.cookie = "turma="+$("#turma").val();
            $("input").empty();
            console.log(e)
            if (!/[0-9][A-z]{2}[0-9]/.test(dataUsu.turma)) {
                $("#turma").css({
                    "border": " 2px solid #ff8f87"
                });
                erro = true;
            }
            if (erro)
            e.preventDefault();
            
        }
    })

    $("#nome").focus(function () {
        $("#nome").css({
            "background-color": "#e1e1e1"
        });
    });
    $("#idade").focus(function () {
        $("#idade").css({
            "background-color": "#e1e1e1"
        });
    });
    $("#turma").focus(function () {
        $("#turma").css({
            "background-color": "#e1e1e1"
        });
    });
    $("#nome").blur(
        function () {
            $(this).css({
                'background-color': '#ffffff'
            });
        });
    $("#idade").blur(
        function () {
            $(this).css({
                'background-color': '#ffffff'
            });
        });
    $("#turma").blur(
        function () {
            $(this).css({
                'background-color': '#ffffff'
            });
        });
});