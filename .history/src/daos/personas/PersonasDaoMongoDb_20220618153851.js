import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class PersonasDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('personas', {
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            edad: { type: Number, required: true },
        });
        super('productos', {
            titulo: { type: String, required: true },
            precio: { type: Number, required: true },
            img: { type: String, required: true },
            id: { type: Number, required:true},
        })
    }
}

export default PersonasDaoMongoDb
