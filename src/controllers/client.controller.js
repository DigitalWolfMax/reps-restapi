import {pool}  from '../../db/db.js'


export const  getClient = async (req, res) => {
    const {cliente_id} = (req.body)

    try{
        const [rows] = await pool.query("SELECT * FROM clientes WHERE  cliente_id = ? ", [cliente_id])
        res.json(rows)
    }
    catch (error){
        res.status(500).json({message: `something went wrong, ${error}`})
    }
   
}

export const  getClientByid = async (req, res) => {
    try{
        const cliente_id = (req.params.id)
        const [rows] = await pool.query("SELECT * FROM clientes WHERE  cliente_id = ? ", [cliente_id])
        rows.length>0 ? res.status(200).json(rows) : res.status(404).json({message: 'client not fount'})

    }catch (error){
        res.status(500).json({message: `something went wrong, ${error}`})
    }
}

export const createClient= async(req, res) => {
    try{
        const {valores} = (req.body)
        console.log(valores)
        const {q, v} = generateInsertQuery('clientes', valores)
        console.log(q)
        const [rows] = await pool.query(q, v)
        res.status(200).json({id:rows.insertId})

    }catch (error){
        res.status(500).json({message: `something went wrong, ${error}`})
    }
}



export const updateClientById = async(req, res) => {
    try{
        const {id} = (req.params)
        const valuesToUpdate = req.body
        const {q,v} = generateUpdateQuery('clientes',id,valuesToUpdate)
        const [result] = await pool.query(q, v)
        console.log(result.affectedRows)
        result.affectedRows>0 ? res.status(200).json({affectedRows:result.affectedRows}): res.status(404).json({message:"Client not found"})
    } catch (error){
        res.status(500).json({message: `something went wrong, ${error}`})
    }
    
}


export const deleteClientById = async(req, res ) => {
    try{
        const cliente_id = (req.params.id)
        const [result] = await pool.query("DELETE FROM clientes WHERE cliente_id = ? ", [cliente_id])
        result.affectedRows>0 ? res.status(200).json({affectedRows: result.affectedRows}): res.status(404).json({message: 'client not found'})
    } catch (error){
        res.status(500).json({message: `something went wrong, ${error}`})
    }
}
// 204 ok but no response


function generateInsertQuery(tableName, data) {
    // Generate column names from JSON keys
    const columns = Object.keys(data).join(', ');

    // Generate values as placeholders
    const placeholders = Object.keys(data).map(() => '?').join(', ');

    // Create SQL query
    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;

    return {q :query, v: Object.values(data)}
       
}




function generateUpdateQuery(tableName, id, valuesToUpdate) {
    // Generate SET clause
    const setClause = Object.keys(valuesToUpdate)
        .map(key => `${key} = ?`)
        .join(', ');

    // Create SQL query
    const query = `UPDATE ${tableName} SET ${setClause} WHERE cliente_id = ?`;

    // Append ID value to values array
    const values = [...Object.values(valuesToUpdate), id];

    return {
        q: query,
        v: values
    };
}


// // Example usage:
// const valuesToUpdate = {
//     name: "John",
//     age: 35,
//     city: "Los Angeles"
// };

// const tableName = "users";
// const id = 123;

// const { query, values } = generateUpdateQuery(tableName, id, valuesToUpdate);

// console.log("Generated Query:", query);
// console.log("Values:", values);