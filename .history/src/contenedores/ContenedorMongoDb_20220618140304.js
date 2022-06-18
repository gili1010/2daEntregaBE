import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
import config from '../config.js'

//await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)
const uri= `mongodb+srv://lgili:Riquelme10@cluster0.9ncbzn8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
/*      auth: {
        username,
        password,
    } */ 
})

await client.connect()

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        
    }

    async listarAll() {
       try {
        const ecommerce = client.db("ecommerce");
        const dbPersonas = ecommerce.collection("personas");
        const personas = await dbPersonas.find().toArray()
            //const objs = await db.personas.find()
            return JSON.parse(personas)
        } catch (error) {
            return []
        } 
    }

    async guardar(nuevoElem) {

    }

    async actualizar(nuevoElem) {

    }

    async borrar(id) {

    }

    async borrarAll() {

    }
}

export default ContenedorMongoDb