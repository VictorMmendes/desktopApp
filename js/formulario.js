window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

$(document).ready(function(){
    $("#cancel").click(function(){
    	$('.pane-conteudo').load('principal.html');
    });

    $("#confirm").click(function(){

        var tit = $('#tit').val();
        var desc = $('#desc').val();

        var ind = arrayTarefas.length;
        arrayTarefas[ind] = {
        	titulo:tit,
        	descricao:desc,
        	status: 1
        };

        $('.pane-conteudo').load('principal.html');
    });

    $(".form-act").submit(function( event ) {
        event.preventDefault();
    });
});
