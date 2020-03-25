const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const menu = require('./config/menu.js')

// require('electron-reload')(__dirname, {
//     // electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
// })



let mainWindow = null

app.on('ready', ()=>{

    let mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    // mainWindow.setMenu(null)

    mainWindow.on('closed', ()=>{
        app.quit()
    })
    
})
