$("#cadastrar").click(function() {

    localStorage.setItem([], 'users');

    var nome = $('#nome').val();
    var cep = $('#cep').val();
    var bairro = $('#bairro').val();
    
    var objeto = [];

    var data = {
        nome: nome,
        cep: cep,
        bairro: bairro
    };

    objeto = localStorage.getItem('users') ? localStorage.getItem('users') : [];
    
    objeto.push(data);

    localStorage.setItem('users', objeto);
});

$('#cep').change(function() {
    var tamanho =  $(this).val().length;

    if(tamanho == 8){
        var cep = $('#cep').val();
        $.ajax({
            url: "https://viacep.com.br/ws/"+cep+"/json/",
            type: "GET",
            dataType: "JSON",
            success: function (response) {
               $('#bairro').val(response.bairro);
            },
            error: function (e) {
                console.log("Erro: " + e);
            }
   
        });
    }
});
