import express from 'express';
import pool from '../db/config.js'
const router = express.Router();

router.get('/dashboard', async (req, res) => {
    try {
     

        const sqlSumMonth = 'SELECT COALESCE(SUM(total), 0) AS TOTAL FROM venta WHERE EXTRACT(MONTH FROM fecha) = EXTRACT(MONTH FROM NOW()) '
        const sumTotal = await pool.query(sqlSumMonth)

        const sqlMaxCategory = `SELECT c.categoria, SUM(v.cantidad) as cantidad
        FROM categoria c
        JOIN producto p
        ON c.id_categoria = p.id_categoria
        JOIN venta_detalle v
        ON v.id_producto = p.id_producto
        GROUP BY categoria
        ORDER BY cantidad DESC`
        const maxCategory = await pool.query(sqlMaxCategory);


        const sqlProducts = 'SELECT p.nombre_producto, SUM(v.cantidad ) AS cantidad FROM producto p JOIN venta_detalle v ON p.id_producto = v.id_producto GROUP BY nombre_producto ORDER BY cantidad'
        const soldProducts = await pool.query(sqlProducts)

        return res.status(200).json({
            sumTotal : sumTotal.rows[0],
            maxCategory : maxCategory.rows,
            soldProducts: soldProducts.rows

        })
    } catch (error) {
        return res.status(500).send('Lo sentimos, ha ocurrido un error')
    }
})


export default router