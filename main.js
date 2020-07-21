// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    minHeight: 500,
    minWidth: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function setup() {
  clearall();
  var ios14 = document.getElementById("#14");
  ios14.style.display = "flex";
}

function clearall() {
  var ios10 = document.getElementById("#10");
  var ios11 = document.getElementById("#11");
  var ios12 = document.getElementById("#12");
  var ios13 = document.getElementById("#13");
  var ios14 = document.getElementById("#14");

  ios14.style.display = "none";
  ios13.style.display = "none";
  ios12.style.display = "none";
  ios11.style.display = "none";
  ios10.style.display = "none";
}

function os14() {
  clearall();
  var ios = document.getElementById("#14");
  ios.style.display = "block";
}

function os13() {
  clearall();
  var ios = document.getElementById("#13");
  ios.style.display = "flex";
}

function os12() {
  clearall();
  var ios = document.getElementById("#12");
  ios.style.display = "flex";
}

function os11() {
  clearall();
  var ios = document.getElementById("#11");
  ios.style.display = "flex";
}

function os10() {
  clearall();
  var ios = document.getElementById("#10");
  ios.style.display = "flex";
}