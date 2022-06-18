import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class PersonasDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('productos', {
            titulo: { type: String, required: true },
            precio: { type: Number, required: true },
            img: { type: String, required: true },
            id: { type: Number, required:true},
        });
    }
}

export default PersonasDaoMongoDb
