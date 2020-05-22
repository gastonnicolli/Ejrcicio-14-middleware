const verifyAdmin = (req,res,next)=>{
    const nombreAverificar = req.query.user;
    const users =['Ada','Greta','Vim','Tim'];
    const nombreValido=users.find(user=>{
        return user == nombreAverificar;
    });
    if(!nombreValido){
        return res.send('No tiene los privilegios para ingresar.')
    }
    req.nombreAdmin = nombreValido;
    next();
};

module.exports = verifyAdmin;