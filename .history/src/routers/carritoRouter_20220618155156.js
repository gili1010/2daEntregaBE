import { Router } from 'express';
import { personasDao } from '../daos/personas/index.js'

const carritoRouter = Router()

const personasControllerGet = async (req, res) => {
    const productos = await personasDao.listarAll();
    res.json(productos);
};

const personasControllerGetById = async (req, res) => {
    const productos = await personasDao.listar(req.params.id);
    res.json(productos);
};

carritoRouter.get('/', personasControllerGet)
carritoRouter.get('/:id', personasControllerGetById)

carritoRouter.post('/', async (req, res) => {
    const prodAgregado = await personasDao.guardar(req.body);
    res.json(prodAgregado)
})

carritoRouter.put('/:id', async (req, res) => {
    const prodActualizado = await personasDao.actualizar(req.body);

    res.json(prodActualizado)
})

carritoRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await personasDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { carritoRouter }