import { Router } from "express";

import { createClients, getClientes, updateClients ,deleteClients } from "../controllers/clients.controller.js";

var rute = 'estadisticas'

const router = Router()

router.get(rute, getClientes )
router.post(rute,  createClients)

router.put(rute, updateClients)

router.delete(rute, deleteClients)




export default router 