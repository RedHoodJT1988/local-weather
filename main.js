const { create } = require('domain');
const {app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  // win.loadURL(`file://${__dirname}/dist/local-weather-app/index.html`);
  if (process.env.DEBUG) {
    win.loadURL(`http://localhost:8000`);
  } else {
    win.loadURL(`file://${__dirnam}/dist/local-weather-app/index.html`);
  }


  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
