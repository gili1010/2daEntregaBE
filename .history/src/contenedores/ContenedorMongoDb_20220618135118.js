//import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)
await client.connect()

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        
    }

    async listarAll() {
       try {
        const ecommerce = mongoose.db("ecommerce");
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