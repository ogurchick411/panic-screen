const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false,
    frame: false,
    skipTaskbar: true,
    backgroundColor: '#000000',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  if (process.platform === 'darwin' && app.dock) {
    app.dock.hide();
  }

  createWindow();

  globalShortcut.register('CommandOrControl+Escape', () => {
    if (win.isVisible()) {
      win.setAlwaysOnTop(false);
      win.setFullScreen(false);
      win.minimize();
      win.hide();
      if (process.platform === 'darwin') {
        app.hide();
      }
    } else {
      win.show();
      win.setFullScreen(true);
      win.setAlwaysOnTop(true, 'screen-saver');
      win.focus();
    }
  });
});
