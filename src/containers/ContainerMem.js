class ContenedorMemoria {
    constructor(){
        this.db = []
    }

    getByID(id){
        const data = this.db.filter(doc => doc.id == id);
        return data;
    }

    getAll(){
        return this.db
    }

    save(newDoc){
        if (this.db.length){
            const last_id = this.db[this.db.length -1].id
            newDoc.id = last_id + 1
        }else{
            newDoc.id = 1;
        }
        newDoc.timestamp = Date.now();
        this.db.push(newDoc);
        return newDoc;
    }

    update(elem){
        const index = this.db.findIndex(doc => doc.id == elem.id);
        elem.timestamp = Date.now();
        this.db[index] = elem;
        return elem
    }

    delete(id){
        const index = this.db.findIndex(doc => doc.id == id);

        if(index >= 0){
            this.db.splice(index, 1)

            return console.log('Documento eliminado')
        }else{
            return 'El documento no esta en la lista';
        }
    }

    deleteAll(){
        this.db = []
        return console.log('Todos los documentos fueron eliminados')
    }
}

export default ContenedorMemoria;