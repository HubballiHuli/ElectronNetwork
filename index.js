const electron = require('electron');
const {app,BrowserWindow} = electron;
let mainWin;

app.on('ready',createMainWindow);

function createMainWindow(){
    mainWin = new BrowserWindow({});
    mainWin.loadFile('./network.html');
    mainWin.on('closed',function(){
        app.quit();
    });
}