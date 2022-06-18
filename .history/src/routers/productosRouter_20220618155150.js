import { Router } from 'express';
import { personasDao } from '../daos/personas/index.js'

const productosRouter = Router()

const personasControllerGet = async (req, res) => {
    const productos = await personasDao.listarAll();
    res.json(productos);
};

const personasControllerGetById = async (req, res) => {
    const productos = await personasDao.listar(req.params.id);
    res.json(productos);
};

productosRouter.get('/', personasControllerGet)
productosRouter.get('/:id', personasControllerGetById)

productosRouter.post('/', async (req, res) => {
    const prodAgregado = await personasDao.guardar(req.body);
    res.json(prodAgregado)
})

productosRouter.put('/:id', async (req, res) => {
    const prodActualizado = await personasDao.actualizar(req.body);

    res.json(prodActualizado)
})

productosRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await personasDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { productosRouter }