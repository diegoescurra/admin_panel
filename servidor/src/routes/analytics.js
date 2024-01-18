import express from 'express';
import pool from '../db/config.js'
const router = express.Router();

router.get('/dashboard', async (req, res) => {
    try {
        const sql = 'SELECT p.nombre_producto, COUNT(v.id_producto) FROM producto p JOIN venta_detalle v ON p.id_producto = v.id_producto GROUP BY p.nombre_producto ORDER BY COUNT(v.id_producto) DESC LIMIT 1'
        const producto = await pool.query(sql);
        return res.status(200).json(producto.rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).send('Lo sentimos, ha ocurrido un error')
    }
})


export default router