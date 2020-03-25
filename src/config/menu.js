const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')

let menu = [
    {
        label: 'File',
        submenu: [

        ]
    },
    {
        label: 'Window',
        submenu: [
            {
                label: 'Exit',
                accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
                click(){
                    app.quit()
                }
            },
            {
                label: 'Minimize',
                test() {
                    
                }
            }
        ]

    },
    {
        label: 'About',
        click(){
            let about = new BrowserWindow({
                width: 400,
                height: 230
            })
                about.loadURL(url.format({
                pathname: path.join(__dirname, '../views/about.html'),
                protocol: 'file',
                slashes: true
            }))
        
            about.setMenu(null)
        }

    }
]


menu.push({
    label: 'DevTools',
    submenu: [
        {
            role: 'reload'
        }
    ]
})

module.exports = menu