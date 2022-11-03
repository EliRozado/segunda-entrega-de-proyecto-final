import fs from 'fs';

class ContenedorFS {
    constructor(ruta){
        this.archivo = ruta;
    }

    getByID(id){
        const data = this.processData();
        let doc  = data.find(doc => doc.id == id) || null

        if(doc){
            return doc
        }else{
            return console.log('No se encontro el Documento')
        }
    }

    getAll(){
        const data = this.processData();
        
        if(data.length){
            return data
        }else{
            console.log('No se encontraron documentos')
            return []
        }
    }

    save(newDoc){
        const data = this.processData();
        
        if (data.length){
            const last_id = data[data.length -1].id
            newDoc.id = last_id + 1
        }else{
            newDoc.id = 1;
        }

        newDoc.timestamp = Date.now();
        data.push(newDoc);

        fs.writeFileSync(this.archivo, JSON.stringify(data, null, 2))
        return newDoc;
    }

    update(id, elem){
        const data = this.processData();
        const index = data.findIndex(doc => doc.id == id);

        elem.timestamp = Date.now()
        elem.id = id;
        data[index] = elem;

        fs.writeFileSync(this.archivo, JSON.stringify(data, null, 2))
        return elem
    }

    async delete(id){
        const data = this.processData();
        const index = data.findIndex(doc => doc.id == id);

        if(index >= 0){
            data.splice(index, 1);

            fs.writeFileSync(this.archivo, JSON.stringify(data, null, 2))
            return 'El producto fue eliminado';
        }else{
            return 'El producto buscado no esta en la lista';
        }
    }

    async deleteAll(){
        const data = []
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, 2))
        console.log('Todos los documentos fueron eliminados')
    }

    processData(){
        const data = []
        // * Si ya hay algo en el archivo, pasarlo a data
        try{
            const elementos = JSON.parse(fs.readFileSync(this.archivo, 'utf-8'))
            elementos.forEach(element => {
                data.push(element)
            });
            
        } catch(err) {
            console.log('El archivo estaba vacio')
        }

        return data
    }
}

export default ContenedorFS;