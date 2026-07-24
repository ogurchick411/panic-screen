const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  console.log('App ready');
});

const { app } = require('electron');

app.whenReady().then(() => {
  if (process.platform === 'darwin') app.dock.hide();
});