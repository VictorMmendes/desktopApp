const electron = require('electron');
const { ipcRenderer } = electron;

window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

$(document).ready(() => {
	$('.maximizar').click(() => ipcRenderer.send('janela:maximizar'));

	$('.minimizar').click(() => {
		ipcRenderer.send('janela:minimizar');
	});

	$('.fechar').click(() => {
		ipcRenderer.send('janela:fechar');
	});

	$('.pane-conteudo').load('principal.html');

	$('.btn-principal').click(() => {
		$('.pane-conteudo').load('principal.html');
	});

	$('.btn-formulario').click(() => {
		$('.pane-conteudo').load('formulario.html');
	});
});
