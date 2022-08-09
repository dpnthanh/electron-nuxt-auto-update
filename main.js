const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('src/render/index.html')
  autoUpdater.checkForUpdatesAndNotify()
}

app.whenReady().then(() => {
  createWindow()
})