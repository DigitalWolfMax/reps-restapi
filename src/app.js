import express from  'express'
import clientsRoutes from './routes/clients.routes.js'
import clientRoutes from './routes/client.routes.js'
import '../config.js'


const app = express()

app.use(express.json())

app.use("/api/",clientsRoutes)
app.use("/api/",clientRoutes)

// Not found routes. 

app.use((req, res, next ) => {
    res.status(404).json({
        message: 'endpoint Not found'
    })
})

export default app;
