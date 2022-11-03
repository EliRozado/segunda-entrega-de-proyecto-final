import { cartsCont } from '../index.js';

//const cartDB = './db/carts.json'
//const carts = new CartCont(cartDB)

export const createCart= async (req, res) => {
    // * crea un carrito y devuelve su id
    const newCart = {
        products: []
    }
    const id = await cartsCont.save(newCart);

    res.send({id});
}

export const deleteCart = async (req, res) => {
    // * vacia un carrito y lo elimina
    const { id } = req.params;
    
    const success = cartsCont.delete(id);
    console.log(id, success)
    res.send({success})
}

export const getCartProducts = async (req, res) => {
    // * lista los productos guardados en el cart
    const { id } = req.params;
    const products = await cartsCont.getCartProducts(id)
    res.send(products)
}

export const addProductToCart = async (req, res) => {
    // * agrega un producto al carrito por id del producto
    const { id } = req.params;
    const { id: id_prod, title, description, barcode, thumbnail, price, stock } = req.body;

    const producto = {
        id: id_prod,
        timestamp: Date.now(),
        title: title,
        description: description,
        barcode: barcode,
        thumbnail: thumbnail,
        price: price,
        stock: stock
    }

    cartsCont.addProductToCart(id, producto)
    res.send({message: 'Producto agregado'})
}

export const deleteProductFromCart = async (req, res) => {
    // * elimina un producto por su id de un carrito
    const { id, id_prod } = req.params;

    const result = await cartsCont.deleteProductFromCart(id, id_prod);
    res.send({result})
}

export default { createCart, deleteCart, getCartProducts, addProductToCart, deleteProductFromCart };