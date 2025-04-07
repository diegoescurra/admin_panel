import express from "express";
import pool from "../db/config.js";
const router = express.Router();

router.get("/dashboard", async (req, res) => {
  try {
    const sqlSumMonth =
      "SELECT COALESCE(SUM(total), 0) AS TOTAL FROM venta WHERE EXTRACT(MONTH FROM fecha) = EXTRACT(MONTH FROM NOW()) ";
    const sumTotal = await pool.query(sqlSumMonth);

    const sqlMaxCategory = `SELECT c.categoria, SUM(v.cantidad) as Cantidad
        FROM categoria c
        JOIN producto p
        ON c.id_categoria = p.id_categoria
        JOIN venta_detalle v
        ON v.id_producto = p.id_producto
        JOIN venta 
        ON venta.id_venta = v.id_venta
		WHERE EXTRACT (MONTH FROM fecha) = EXTRACT(MONTH FROM NOW())
        GROUP BY categoria
        ORDER BY Cantidad DESC`;
    const maxCategory = await pool.query(sqlMaxCategory);

    const sqlProducts = `SELECT p.nombre_producto, SUM(v.cantidad ) AS Cantidad 
        FROM producto p 
        JOIN venta_detalle v 
        ON p.id_producto = v.id_producto 
        JOIN venta ON v.id_venta = venta.id_venta
        WHERE EXTRACT(MONTH FROM fecha) = EXTRACT(MONTH FROM NOW())
        GROUP BY nombre_producto ORDER BY Cantidad`;
    const soldProducts = await pool.query(sqlProducts);

    const sqlTotalClients = `SELECT cli.nombre, SUM(v.total) as Total
        FROM cliente cli
        JOIN venta v
        ON cli.id_cliente = v.id_cliente
        GROUP BY nombre`;
    const totalClients = await pool.query(sqlTotalClients);

    return res.status(200).json({
      sumTotal: sumTotal.rows[0],
      maxCategory: maxCategory.rows,
      soldProducts: soldProducts.rows,
      totalClients: totalClients.rows
    });
  } catch (error) {
    return res.status(500).send("Lo sentimos, ha ocurrido un error:" + error);
  }
});

export default router;
