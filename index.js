const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: false,
    alwaysOnTop: true,
    type: 'panel',
    skipTaskbar: true,
    fullscreen: true,
    simpleFullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') app.dock.hide();
  createWindow();

  globalShortcut.register('CommandOrControl+Escape', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
      win.setAlwaysOnTop(true, 'screen-saver');
    }
  });
});