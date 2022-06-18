import { Router } from 'express';
import { productosDao } from '../daos/personas/index.js'

const carritoRouter = Router()

const personasControllerGet = async (req, res) => {
    const productos = await productosDao.listarAll();
    res.json(productos);
};

const personasControllerGetById = async (req, res) => {
    const productos = await productosDao.listar(req.params.id);
    res.json(productos);
};

carritoRouter.get('/', personasControllerGet)
carritoRouter.get('/:id', personasControllerGetById)

carritoRouter.post('/', async (req, res) => {
    const prodAgregado = await productosDao.guardar(req.body);
    res.json(prodAgregado)
})

carritoRouter.put('/:id', async (req, res) => {
    const prodActualizado = await productosDao.actualizar(req.body);

    res.json(prodActualizado)
})

carritoRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await productosDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { carritoRouter }