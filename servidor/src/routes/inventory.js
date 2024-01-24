import express from 'express';
import pool from '../db/config.js';

const router = express.Router();

router.get('/inventario/:id', async (req, res) => {

try {
    const {id} = req.params
    const sql = 'SELECT * FROM inventario WHERE id_producto = $1'
    const values = [id]
    const inventory = await pool.query(sql, values);
    return res.status(200).json(inventory.rows)
} catch (error) {
    return res.status(500).send('Error en inventario')
}   
});

export default router;
