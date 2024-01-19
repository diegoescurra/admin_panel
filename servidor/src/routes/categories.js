import express from 'express';
const router = express.Router();
import pool from '../db/config.js';

router.get('/categorias', async (req, res) => {
    try {
        const sql = 'SELECT * FROM categoria';
        const categoria = await pool.query(sql);
        return res.status(200).json(categoria.rows)
    } catch (error) {
        return res.status(500).send('Error interno categorias')
    }
})


router.post('/categorias', async (req, res) => {
    try {
        const sql = 'INSERT INTO categoria (categoria) VALUES ($1) returning *';
        const {categoria} = req.body;
        const values = [categoria]
        const newCategory = await pool.query(sql, values);
        return res.status(200).json(newCategory.rows[0])
        
    } catch (error) {
        console.log(error)
    }
})

export default router;