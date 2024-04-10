import { Router } from "express";
import {pool}  from '../../db/db.js'
import { createClient,deleteClientById,  getClient,getClientByid , updateClientById} from "../controllers/client.controller.js";

const router = Router()

router.get('/client',getClient )

router.get('/client/:id',getClientByid )

router.post('/client', createClient )


router.put('/client/:id', updateClientById)


router.delete('/client/:id', deleteClientById)


export default router;