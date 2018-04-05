const electron = require('electron');
const { ipcRenderer } = electron;

var btOk = document.querySelector("#btOk");
btOk.addEventListener('click', () => {
    alert('ok');
});
