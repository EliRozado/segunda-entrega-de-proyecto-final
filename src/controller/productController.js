import productsCont from '../index.js';
//const productsDB = './db/products.json'

export const getProducts = async (req, res) => {
    // * devuelve todos los productos o lista un producto por su id
    if(req.params.id){
        const {id} = req.params;
        res.send(await productsCont.getByID(id))
    }else{
        res.send(await productsCont.getAll())
    }
}

export const addProduct = async (req, res) => {
    // * incorpora un producto a la lista
    const { title, description, barcode, thumbnail, price, stock } = req.body;

    const producto = {
        title: title,
        description: description,
        barcode: barcode,
        thumbnail: thumbnail,
        price: price,
        stock: stock
    }

    await productsCont.save(producto)
    res.send(await productsCont.getAll())
}

export const editProduct = async (req, res) => {
    // * actualiza un producto por su id
    const { id } = req.params;
    const { title, description, barcode, thumbnail, price, stock } = req.body;

    const producto = {
        _id: id,
        title: title,
        description: description,
        barcode: barcode,
        thumbnail: thumbnail,
        price: price,
        stock: stock
    }

    await productsCont.update(producto)

    res.send(await productsCont.getAll())
}

export const deleteProduct = async (req, res) => {
    // * borra un producto por su id
    const { id } = req.params;
    let result = await productsCont.delete(id); // nos dice si el producto fue eliminado o no estaba en la lista
    res.send({result})
}

export default { getProducts, addProduct, editProduct, deleteProduct };