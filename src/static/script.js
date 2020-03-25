const os = require('os')
document.querySelectorAll('.user code')[0].innerHTML = process.env.username
document.querySelectorAll('.pc code')[0].innerHTML = process.env.userdomain
document.querySelectorAll('.processor code')[0].innerHTML = os.cpus()[0].model.split(' ')[0] +' '+ os.cpus()[0].model.split(' ')[1]
document.querySelectorAll('.os code')[0].innerHTML = os.platform()
document.querySelectorAll('.op-sys code')[0].innerHTML = os.arch()
document.querySelectorAll('.mem code')[0].innerHTML = Math.floor(os.totalmem() / 1024 / 1024 / 1024) +'GB'



// OS LOGO
let img = document.querySelectorAll('.os-log')[0]
let platform = os.platform()

switch(platform){

    case 'win32':
        img.src = '../static/windows.png'
    break

    case 'darwin':
        img.src = '../static/apple.png'
    break

    default:
        img.src = '../static/linux.png'
    break    
}