import express from 'express'
import { personasRouter } from './routers/personasRouter.js'
import { carritoRouter } from './routers/carritoRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/personas', personasRouter)
app.use('/api/carrito', carritoRouter)

export default app