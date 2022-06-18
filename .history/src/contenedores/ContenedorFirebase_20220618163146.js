import admin from "firebase-admin"
import * as fs from 'fs'
import config from '../config.js'

const serviceAccount = JSON.parse(fs.readFileSync("./DB/ecommerce-d94cd-firebase-adminsdk-f6o02-d43a00197e.json", 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const asObj = doc => ({ id: doc.id, ...doc.data() })

console.log('Base Firebase conectada!')

const db = admin.firestore();
const dbProductos = db.collection('productos')

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async listar(id) {
        try {
            const productos = await dbProductos.doc.get()
                return productos
            } catch (error) {
                return []
            } 
    }

    async listarAll() {

    }

    async guardar(nuevoElem) {

    }

    async actualizar(nuevoElem) {

    }

    async borrar(id) {

    }

    async borrarAll() {
        // version fea e ineficiente pero entendible para empezar
        try {
            const docs = await this.listarAll()
            const ids = docs.map(d => d.id)
            const promesas = ids.map(id => this.borrar(id))
            const resultados = await Promise.allSettled(promesas)
            const errores = resultados.filter(r => r.status == 'rejected')
            if (errores.length > 0) {
                throw new Error('no se borró todo. volver a intentarlo')
            }
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async desconectar() {
    }
}

export default ContenedorFirebase