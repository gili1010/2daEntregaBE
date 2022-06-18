import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('carrito', {
            titulo: { type: String, required: true },
            precio: { type: Number, required: true },
            img: { type: String, required: true },
            id: { type: Number, required:true},
        });
    }
}

export default ProductosDaoMongoDb
