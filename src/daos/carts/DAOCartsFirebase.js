import { FieldValue } from "firebase-admin/firestore";
import ContenedorFirebase from "../../containers/ContainerFirebase.js";

class DAOCartsFirebase extends ContenedorFirebase{
    constructor() {
        super("carts")
    }
    
    async addProductToCart(cart_id, product){
        try {
            const ref = this.db.collection(this.collection).doc(cart_id);
            const products = await this.getCartProducts(cart_id)
            await ref.update({'products': [product, ...products]});
            return 'added to the cart'
        }catch(e){
            return console.log('No se pudo agregar el producto', e)
        }
    }

    async getCartProducts(id){
        try {
            const ref = this.db.collection(this.collection).doc(id);
            const cart = await ref.get();

            const products = cart.data().products.map(product => ({...product}))
            return products;
        }catch(e){
            return console.log('El carrito no existe')
        }
    }

    async deleteProductFromCart(cart_id, product_id){
        try {
            const ref = this.db.collection(this.collection).doc(cart_id);
            const products = await this.getCartProducts(cart_id);
            const index = products.findIndex(product => product.id == product_id)
            products.splice(index, 1);

            await ref.update({products: products});
            return 'El producto fue eliminado del carrito'

            }catch(e){
                return console.log('El producto no se encuentra en el carrito/n', e);
            }
    }
}

export default DAOCartsFirebase;