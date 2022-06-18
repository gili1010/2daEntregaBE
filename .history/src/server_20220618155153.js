import express from 'express'
import { productosRouter } from './routers/productosRouter.js'
import { carritoRouter } from './routers/carritoRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productosRouter)
app.use('/api/carrito', carritoRouter)

export default app