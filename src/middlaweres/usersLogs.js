const fs=require('fs');
const path = require('path');
const rutaBase = __basedir;
const pathAguardar = path.join(rutaBase,'logs','usersLogs.txt');

const registroDeRutas=(req, res, next)=>{
    fs.appendFileSync('./logs/userLogs.txt',`El usuario ingreso a la ruta: ${req.path}\n`);
    next();
}

module.exports=registroDeRutas;