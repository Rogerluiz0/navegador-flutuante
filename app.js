const { app, BrowserWindow, globalShortcut } = require('electron')

let win = null, contents = null

function createWindow () {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    // transparent:true,
    // frame: false,
    titleBarStyle: 'customButtonsOnHover',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    },
  })

  win.loadURL("http://localhost:3000/")

  contents = win.webContents

}

function toggleDevTools() {
  contents.toggleDevTools()
}

function fullScreen() {
  win.isSimpleFullScreen() ? win.setSimpleFullScreen(false) : win.setSimpleFullScreen(true);
}

function createShortcuts() {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
  globalShortcut.register('F11', fullScreen)
}

app.whenReady()
.then(createWindow)
.then(createShortcuts)

app.on('window-all-closed', () => {
  if ( process.platform !== 'darwin' ) {
    app.quit()
  }
})

app.on('activate', recreateWindow)


function recreateWindow() {
  if ( BrowserWindow.getAllWindows().length === 0 ) {
    createWindow()
  }
}