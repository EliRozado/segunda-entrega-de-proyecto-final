import { Schema } from "mongoose";
import ContenedorMongo from "../../containers/ContainerMongo.js";

const products = new Schema({
    id: {type: String, required:true},
    timestamp: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    barcode: {type: String, required: true},
    thumbnail: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
}, {_id: false}
)

class DAOCartsMongo extends ContenedorMongo {
    constructor() {
        super("carts", {
            timestamp: Number,
            products: [
                products
            ]
        })
    }
    
    async addProductToCart(cart_id, product){
        try {
            product.timestamp = Date.now();
            await this.db.findOneAndUpdate({_id: cart_id}, {$push: {products: product}})
            return product;
        }catch(e){
            return console.log('No se pudo agregar el producto', e)
        }
    }

    async getCartProducts(id){
        try {
            const cart = await this.db.getByID(id)
            return cart.products;
        }catch(e){
            return console.log('El carrito no existe')
        }
    }

    async deleteProductFromCart(cart_id, product_id){
        try {
            await this.db.updateOne({_id: cart_id}, {$pull: {products: {id: product_id}}})
            return 'Producto eliminado';
        }catch(e){
            return 'El producto no se encuentra en el carrito';
        }
    }
}

export default DAOCartsMongo;