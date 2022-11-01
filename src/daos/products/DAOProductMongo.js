import { Schema } from "mongoose";
import ContenedorMongo from "../../containers/ContainerMongo.js";

class DAOProductsMongo extends ContenedorMongo {
    constructor() {
        super("products", {
            timestamp: {type: Number, required: true},
            products: {type: Schema.Types.Mixed, required: true},
        })
    }

    async getCartProducts(){

    }

    async addProductToCart(){
        
    }

    async deleteProductFromCart(){
        
    }
}

export default DAOProductsMongo;