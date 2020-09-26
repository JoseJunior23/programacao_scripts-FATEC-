<<<<<<< HEAD
module.exports = middleware =>{
    return (req, res, next) => {
        if(req.user.admin){
            middleware(req, res, next)
        }else {
            res.status(401).send('Usuario não é administrador')
=======
module.exports = middleware => {
    return ( req, res, next ) => {
        if(req.user.admin) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador')
>>>>>>> 270f86daf2c91422aa5a3b1c77ebf9927f28c790
        }
    }
}