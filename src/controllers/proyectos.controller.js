import {pool}  from '../db.js'


export const  getClientes = async (req, res) => {
    const result = await pool.query("SELECT * FROM clientes as result")
    res.json(result)
}

export const createClients = async(req, res) => {
    const result = await pool.query("SELECT 'posting clients'")
    res.json(result)
}

export const updateClients = async(req, res) => {
    const result = await pool.query("SELECT 'putting clients'")
    res.json(result)
}

export const deleteClients = async(req, res) => {
    const result = await pool.query("SELECT 'deleting clients'")
    res.json(result)
}
