import pkg from 'mongodb';
const { MongoClient } = pkg;
import mongoose from 'mongoose'
import config from '../config.js'

//await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)
 const uri= `mongodb+srv://lgili:Riquelme10@cluster0.9ncbzn8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
})
await client.connect() 

const ecommerce = client.db("ecommerce");
const dbPersonas = ecommerce.collection("productos");

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            const personas = await dbPersonas.find({id: Number(id)}).toArray()
                return personas
            } catch (error) {
                return []
            } 
    }

    async listarAll() {
       try {
        const personas = await dbPersonas.find().toArray()
            return personas
        } catch (error) {
            return []
        } 
    }

    async guardar(nuevoElem) {
        try {
            const personas = await dbPersonas.insertOne(nuevoElem).toArray()
                return personas
            } catch (error) {
                return []
            } 
    }

    async actualizar(nuevoElem) {

    }

    async borrar(id) {

    }

    async borrarAll() {

    }
}

export default ContenedorMongoDb