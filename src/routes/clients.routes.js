import { Router } from "express";

import { createClients, getClientes, updateClients ,deleteClients } from "../controllers/clients.controller.js";


const router = Router()

router.get('/clients', getClientes )
router.post('/clients',  createClients)

router.put('/clients', updateClients)

router.delete('/clients', deleteClients)




export default router 