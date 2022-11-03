import mongoose from "mongoose";
import config from "../config.js"

await mongoose.connect(config.mongoDB.uri, config.mongoDB.options);
class ContenedorMongo {
    constructor(collection, schema){
        this.db = mongoose.model(collection, schema)
    }

    async getByID(id){
        try {
            const data = await this.db.find({_id: id});
            return data;
        }catch(e){
            return console.log('No se encontro el documento')
        }
    }

    async getAll(){
        try {
            const data = await this.db.find({});
            return data;
        }catch(e){
            return console.log('No se pudieron obtener los datos de la database')
        }
    }

    async save(newDoc){
        try {
            newDoc.timestamp = Date.now();
            const doc = await this.db.create(newDoc);
            return doc;
        } catch(e){
            return console.log('Falló guardar el documento')
        }
    }

    async update(id, elem){
        try {
            elem.timestamp = Date.now();
            elem._id = id;
            await this.db.findOneAndUpdate({_id: id}, elem)
            return elem;
        } catch(e){
            return console.log('Documento no existe')
        }
    }

    async delete(id){
        try {
            const result = await this.db.deleteOne({_id: id})
            return result;
        } catch(e){
            return console.log('El documento no existe')
        }
    }

    async deleteAll(){
        try {
            await this.db.deleteMany({})
        } catch(e){
            return console.log('La coleccion estaba vacia o no existe')
        }
    }
}

export default ContenedorMongo;