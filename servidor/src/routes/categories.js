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

export default router;