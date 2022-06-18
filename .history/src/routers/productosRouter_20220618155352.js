import { Router } from 'express';
import { productosDao } from '../daos/personas/index.js'

const productosRouter = Router()

const personasControllerGet = async (req, res) => {
    const productos = await productosDao.listarAll();
    res.json(productos);
};

const personasControllerGetById = async (req, res) => {
    const productos = await productosDao.listar(req.params.id);
    res.json(productos);
};

productosRouter.get('/', personasControllerGet)
productosRouter.get('/:id', personasControllerGetById)

productosRouter.post('/', async (req, res) => {
    const prodAgregado = await productosDao.guardar(req.body);
    res.json(prodAgregado)
})

productosRouter.put('/:id', async (req, res) => {
    const prodActualizado = await productosDao.actualizar(req.body);

    res.json(prodActualizado)
})

productosRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await productosDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { productosRouter }