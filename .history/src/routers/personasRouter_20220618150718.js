import { Router } from 'express';
import { personasDao } from '../daos/personas/index.js'

const personasRouter = Router()

const personasControllerGet = async (req, res) => {
    const productos = await personasDao.listarAll();
    res.json(productos);
};

const personasControllerGetById = async (req, res) => {
    const productos = await personasDao.listar(req.params.id);
    res.json(productos);
};

personasRouter.get('/', personasControllerGet)
personasRouter.get('/:id', personasControllerGetById)

personasRouter.post('/', async (req, res) => {
    const prodAgregado = await personasDao.guardar(req.body);
    res.json(prodAgregado)
})

personasRouter.put('/:id', async (req, res) => {
    const prodActualizado = await personasDao.actualizar(req.params.id,req.body);

    res.json(prodActualizado)
})

personasRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await personasDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { personasRouter }