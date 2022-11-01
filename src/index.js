import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.TIPO);

let productsCont
// let cartsCont

switch (process.env.TIPO) {
    case 'json':
        // const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        // const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')

        // productosDao = new ProductosDaoArchivo()
        // carritosDao = new CarritosDaoArchivo()
        console.log('json')
        break

    case 'firebase':
        // const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        // const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')

        // productosDao = new ProductosDaoArchivo()
        // carritosDao = new CarritosDaoArchivo()
        console.log('firebase')
        break

    case 'mongo':
        const { default: DAOProductsMongo } = await import('./daos/products/DAOProductMongo.js')
        // const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')

        productsCont = new DAOProductsMongo()
        // carritosDao = new CarritosDaoArchivo()
        console.log('mongo')
        break

    default:
        console.log('memoria')
        break
}

export default productsCont;
//, carritosDao