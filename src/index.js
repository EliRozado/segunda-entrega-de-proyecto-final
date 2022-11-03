import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.TIPO);

let productsCont
let cartsCont

switch (process.env.TIPO) {
    case 'json':
        const { default: DAOProductsFS } = await import('./daos/products/DAOProductFS.js')
        const { default: DAOCartsFS } = await import('./daos/carts/DAOCartsFS.js')

        productsCont = new DAOProductsFS()
        cartsCont = new DAOCartsFS()
        console.log('json')
        break

    case 'firebase':
        const { default: DAOProductsFirebase } = await import('./daos/products/DAOProductFirebase.js')
        const { default: DAOCartsFirebase } = await import('./daos/carts/DAOCartsFirebase.js')

        productsCont = new DAOProductsFirebase()
        cartsCont = new DAOCartsFirebase()
        console.log('firebase')
        break

    case 'mongo':
        const { default: DAOProductsMongo } = await import('./daos/products/DAOProductMongo.js')
        const { default: DAOCartsMongo } = await import('./daos/carts/DAOCartsMongo.js')

        productsCont = new DAOProductsMongo()
        cartsCont = new DAOCartsMongo()
        console.log('mongo')
        break

    default:
        const { default: DAOProductsMemoria } = await import('./daos/products/DAOProductMemoria.js')
        const { default: DAOCartsMemoria } = await import('./daos/carts/DAOCartsMem.js')

        productsCont = new DAOProductsMemoria()
        cartsCont = new DAOCartsMemoria()
        console.log('memoria')
        break
}

export { productsCont };
export { cartsCont };