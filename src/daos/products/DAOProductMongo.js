import ContenedorMongo from "../../containers/ContainerMongo.js";

class DAOProductsMongo extends ContenedorMongo {
    constructor() {
        super("products", {
            timestamp: {type: Number, required: true},
            title: {type: String, required: true},
            description: {type: String, required: true},
            barcode: {type: String, required: true},
            thumbnail: {type: String, required: true},
            price: {type: Number, required: true},
            stock: {type: Number, required: true}
        })
    }
}

export default DAOProductsMongo;