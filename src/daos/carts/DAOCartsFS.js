import ContenedorFS from "../../containers/ContainerFS.js";
import fs from 'fs';

class DAOCartsFS extends ContenedorFS {
    constructor(){
        super('./db/carts.json');
    }

    getCartProducts(id){
        const data = this.processData()
        const index = data.findIndex(cart => cart.id == id)

        if(index >= 0){
            return data[index].products
        }else{
            return {respuesta: 'Carrito no existe'}
        } 
    }

    addProductToCart(id_cart, product){  
        const data = this.processData()
        let index = data.findIndex(cart => cart.id == id_cart)

        product.timestamp = Date.now();

        data[index].products.push(product)
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, 2))
        return {respuesta: 'Producto agregado'}

    }

    deleteProductFromCart(id_cart, id_prod){
        const data = this.processData()
        const indexCart = data.findIndex(cart => cart.id == id_cart)
        if(indexCart >= 0){
            let prodIndex = data[indexCart].products.findIndex(product => product.id == id_prod);

            if(prodIndex >= 0){
                data[indexCart].products.splice(prodIndex, 1)

                fs.writeFileSync(this.archivo, JSON.stringify(data, null, 2))
                return 'El producto fue eliminado';
            }else{
                return 'El producto buscado no esta en la lista';
            }
        }else{
            return 'El carrito no existe';
        }
    }
}

export default DAOCartsFS;