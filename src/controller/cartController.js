const { CartCont } = require('../containers/cartCont.js')
const cartDB = './db/carts.json'
const carts = new CartCont(cartDB)

const createCart= (req, res) => {
    // * crea un carrito y devuelve su id
    const newCart = {
        products: []
    }
    const id = carts.save(newCart);

    res.send({id});
}

const deleteCart = (req, res) => {
    // * vacia un carrito y lo elimina
    const { id } = req.params;
    
    const success = carts.deleteCartbyID(id);
    console.log(id, success)
    res.send({success})
}

const getCartProducts = (req, res) => {
    // * lista los productos guardados en el cart
    const { id } = req.params;
    const products = carts.getCartProductsByID(id)
    res.send(products)
}

const addProductToCart = (req, res) => {
    // * agrega un producto al carrito por id del producto
    const { id } = req.params;
    const { id: id_prod, timestamp, title, description, barcode, thumbnail, price, stock } = req.body;

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

    carts.addProductToCart(id, producto)
    res.send({message: 'Producto agregado'})
}

const deleteProductFromCartList = (req, res) => {
    // * elimina un producto por su id de un carrito
    const { id, id_prod } = req.params;

    const result = carts.deleteProductfromCart(id, id_prod);
    res.send({message: result})
}

module.exports={ createCart, deleteCart, getCartProducts, addProductToCart, deleteProductFromCartList }