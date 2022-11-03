import ContenedorFirebase from "../../containers/ContainerFirebase.js";

class DAOProductFirebase extends ContenedorFirebase{
    constructor(){
        super('products')
    }
}

export default DAOProductFirebase;