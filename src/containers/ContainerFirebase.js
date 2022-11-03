import Config from '../config.js'

class ContenedorFirebase {
    constructor(collection){
        this.db = Config.firebase;
        this.collection = collection;
    }

    async getByID(id){
        try {
            const element = this.db.collection(this.collection).doc(id);
            const doc = await element.get();

            if(!doc.exists){
                return 'El Documento no existe'
            }else{
                return {id: doc.id, ...doc.data()}
            }            
        }catch(e){
            return console.log('No se encontro el documento')
        }
    }

    async getAll(){
        try {
            const querySnapshot = await this.db.collection(this.collection).get();

            const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

            return data;
        }catch(e){
            return console.log('No se pudieron obtener los datos de la database')
        }
    }

    async save(newDoc){
        try {
            newDoc.timestamp = Date.now();
            await this.db.collection(this.collection).add(newDoc);
            return newDoc;
        } catch(e){
            return console.log('Falló guardar el documento')
        }
    }

    async update(id, elem){
        try {
            const res = await this.db.collection(this.collection).doc(id).update({...elem});

            return res;
        } catch(e){
            return console.log('Documento no existe')
        }
    }

    async delete(id){
        try {
            await this.db.collection(this.collection).doc(id).delete();
            return 'Documento eliminado';
        } catch(e){
            return 'El documento no existe';
        }
    }

    async deleteAll(){
        try {
            this.db.collection(this.collection).listDocuments().then( doc => {
                doc.map((val) => val.delete())
            })
            
            return console.log('La coleccion fue vaciada')
        } catch(e){
            return console.log('La coleccion estaba vacia o no existe')
        }
    }
}

export default ContenedorFirebase;