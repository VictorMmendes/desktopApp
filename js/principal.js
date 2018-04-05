window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

$(document).ready(function(){
    $("#btOk").click(function(){
        alert('hello');
    });
});
