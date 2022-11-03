import ContenedorFS from "../../containers/ContainerFS.js";

class DAOProductsFS extends ContenedorFS {
    constructor(){
        super('./db/products.json');
    }
}

export default DAOProductsFS;