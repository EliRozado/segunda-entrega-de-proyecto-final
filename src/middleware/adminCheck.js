// * middleware 
const isAdmin = true;

export function adminCheck(req, res, next){
    if(isAdmin){
        next()
    }else(
        res.send({error: -1, mensaje: `método no autorizado para usuarios`})
    )
}

export default adminCheck;