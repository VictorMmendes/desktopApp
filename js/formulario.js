window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

$(document).ready(function(){
    $("#cancel").click(function(){
    	$('.pane-conteudo').load('principal.html');
    });

    $("#confirm").click(function(){
        alert('confirm');
    });

    $(".form-act").submit(function( event ) {
        event.preventDefault();
    });
});
