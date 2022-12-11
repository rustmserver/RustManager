'use strict';
require('update-electron-app')()
const electron = require("electron");
const appExpress = require("./app");

const myapp = electron.app;
const autoUpdater = electron.autoUpdater;
const dialog = electron.dialog;
 
const BrowserWindow = electron.BrowserWindow;
 
let mainWindow;

myapp.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    myapp.quit();
  }
});
 
const gotTheLock = myapp.requestSingleInstanceLock();
if (!gotTheLock) {
  log.info("APP_ALREADY_RUNNING");
  log.info("APP_QUIT");
  myapp.quit();
}

myapp.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL('http://127.0.0.1:3000');

  mainWindow.on('closed', function() {
  mainWindow = null;
  });
});