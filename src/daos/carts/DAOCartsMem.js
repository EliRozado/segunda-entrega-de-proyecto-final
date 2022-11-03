import ContenedorMemoria from "../../containers/ContainerMem.js";

class DAOCartsMemoria extends ContenedorMemoria {
    constructor(){
        super()
    }

    getCartProducts(id){
        const index = this.db.findIndex(doc => doc.id == id)
        return this.db[index].products;
    }

    addProductToCart(id_cart, product){
        const index = this.db.findIndex(doc => doc.id == id_cart);
        this.db[index].products.push(product)
        return this.db[index].products;
    }

    deleteProductFromCart(id_cart, id_prod){
        const indexCart = this.db.findIndex(doc => doc.id == id_cart);
        const indexProd = this.db[indexCart].products.findIndex(product => product.id == id_prod);
        this.db[indexCart].products.splice(indexProd, 1)
        return this.db[indexCart].products;
    }
}
export default DAOCartsMemoria;