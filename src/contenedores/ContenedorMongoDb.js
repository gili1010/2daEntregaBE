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
const dbProductos = ecommerce.collection("productos");

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            const productos = await dbProductos.find({id: Number(id)}).toArray()
                return productos
            } catch (error) {
                return []
            } 
    }

    async listarAll() {
       try {
        const productos = await dbProductos.find().toArray()
            return productos
        } catch (error) {
            return []
        } 
    }

    async guardar(nuevoElem) {
        try {
            const productos = await dbProductos.insertOne(nuevoElem).toArray()
                return productos
            } catch (error) {
                return []
            } 
    }

    async actualizar(nuevoElem) {
        try {
            const productos = await dbProductos.updateOne({id:1},{$set:nuevoElem}).toArray()
            return productos

            } catch (error) {
                return []
            } 
    }

    async borrar(id) {
        try {
            const productos = await dbProductos.deleteOne({id: Number(id)}).toArray()
                return productos
            } catch (error) {
                return []
            } 
    }

    async borrarAll() {
        try {
            const productos = await dbProductos.deletemany({}).toArray()
                return productos
            } catch (error) {
                return []
            } 
    }
}

export default ContenedorMongoDb