$(document).ready(function() {
    
    var cep = 23017383;

    $.ajax({
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        dataType: "JSON",
        success: function (resposta) {
            resposta.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        },
        error: function () {
            console.log("Erro");
        }
    });

});