import express from "express";
import pool from "../db/config.js";

const router = express.Router();

router.get("/productos", async (req, res) => {
  try {
    const sql = "SELECT producto.*, categoria.categoria FROM producto JOIN categoria on producto.id_categoria = categoria.id_categoria";
    const products = await pool.query(sql);
    return res.status(200).json(products.rows);
  } catch (error) {
    return res.status(500).send('Error interno del servidor');
  }
});

router.post('/productos', async (req, res) => {
    try {
        const {nombre_producto, precio, id_categoria} = req.body;
        
        const sql = "INSERT INTO producto (nombre_producto, precio, id_categoria) VALUES ($1, $2, $3) returning *" 
        const values = [nombre_producto, precio, id_categoria]
        const newProduct = await pool.query(sql, values);
        return res.status(200).json(newProduct.rows[0]);

    } catch (error) {
        return res.sendStatus(500).send(error);
    }
});

router.put('/productos', async (req, res) => {
    try {
        const {nombre_producto, precio, id_categoria, id_producto} = req.body;
        const sql = 'UPDATE producto SET nombre_producto = $1, precio = $2, id_categoria = $3 WHERE id_producto = $4 returning *';
        const values = [nombre_producto, precio, id_categoria, id_producto];
        const product = await pool.query(sql, values)
        console.log(product)
        return res.status(200).json(product.rows[0]);

    } catch (error) {
        console.log(error)
        return res.status(500).send('Lo sentimos, ha ocurrido un error')
    }
});

router.delete('/productos', async (req, res) => {
  try {
    const {producto_id} = req.body
    const sql = 'UPDATE producto SET estado = 0 WHERE id_producto = $1';
    const values = [producto_id];
    await pool.query(sql, values)
    return res.status(200);
  } catch (error) {
    console.log(error)
  }
})

export default router;
