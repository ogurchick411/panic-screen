const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') app.dock.hide();
  createWindow();
});
