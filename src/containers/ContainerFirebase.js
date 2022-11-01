import { query } from 'express';
import admin from 'firebase-admin'
import config from "../config.js"

admin.initializeApp(config.firebase);

class ContenedorFirebase {
    constructor(collection){
        this.db = admin.firestore();
        this.query = db.collection(collection)
    }

    async getByID(id){
        try {
            const doc = query.doc(`${id}`);
            const elem = doc.get();
            const response = elem.data();

            return response;
        }catch(e){
            return console.log('No se encontro el documento')
        }
    }

    async getAll(){
        try {
            const querySnap = await this.query.get()
            const docs = querySnap.docs;

            const response = docs.map((doc) => ({
                id: doc.id,
                timestamp: doc.data().timestamp,
                title: doc.data().title,
                description: doc.data().description,
                barcode: doc.data().barcode,
                thumbnail: doc.data().thumbnail,
                price: doc.data().price,
                stock: doc.data().stock
            }))
            return response;
        }catch(e){
            return console.log('No se pudieron obtener los datos de la database')
        }
    }

    async save(newDoc){
        try {
            let doc = query.doc();
            
            newDoc.timestamp = Date.now();
            await this.db.create(newDoc);

            return doc;
        } catch(e){
            return console.log('Falló guardar el documento')
        }
    }

    async update(elem){
        try {
            const doc = query.doc(`${id}`);
            elem.timestamp = Date.now();
            let item = await doc.update(elem);

            return elem;
        } catch(e){
            return console.log('Documento no existe')
        }
    }

    async delete(id){
        try {
            const doc = query.doc(`${id}`);
            const item = await doc.delete();
            return console.log('Documento eliminado')
        } catch(e){
            return console.log('El documento no existe')
        }
    }

    async deleteAll(){
        try {
            const querySnap = await this.query.get()
            const docs = querySnap.docs;

            const batchSize = querySnap.size;

            if(batchSize === 0){
                return console.log('Coleccion vacia')
            }

            const batch = this.db.batch();
            querySnap.docs.forEach((doc) => {
                batch.delete(doc.id)
            });

            return console.log('La coleccion fue vaciada')
        } catch(e){
            return console.log('La coleccion estaba vacia o no existe')
        }
    }
}

export default ContenedorMongo;