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
        res.status(500).send('Lo sentimos, ha ocurrido un error')
    }
});


router.put('/categorias', async (req, res) => {
    try {
        const sql = 'UPDATE categoria SET categoria = $1 WHERE id_categoria = $2 returning *'
        const {categoria, id_categoria} = req.body;
        const values = [categoria, id_categoria];
        const category = await pool.query(sql, values);
        return res.status(200).json(category.rows[0])
    } catch (error) {
        res.status(500).send('Lo sentimos, ha ocurrido un error')
    }
})

export default router;