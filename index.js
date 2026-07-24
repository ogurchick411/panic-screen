const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false, 
    frame: false,
    backgroundColor: '#000000',
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') app.dock.hide();
  createWindow();

  globalShortcut.register('CommandOrControl+Escape', () => {
    if (win.isVisible()) {
      win.setFullScreen(false);
      win.hide();
    } else {
      win.show();
      win.setFullScreen(true);
      win.setAlwaysOnTop(true, 'screen-saver');
    }
  });
});