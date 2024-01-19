import React, { useEffect, useState } from "react";
import Card from "../components/shared/Card";
import { fetchDashboard } from "../services/dashboardRequest";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMaxProduct() {
      setIsLoading(true);
      try {
        const data = await fetchDashboard();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMaxProduct();
  }, []);

  console.log(data);
  const fechaActual = new Date();
  const nombre_mes = fechaActual.toLocaleString("es", { month: "long" });

  if (isLoading) {
    return <>Cargando</>;
  }

  return (
    <>
      {data ? (
        <div>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold mb-4 capitalize">
              Dashboard de {nombre_mes}
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto p-4">
            <Card
              title={"Objetivo"}
              content={"$30.000.000"}
              className={"bg-sky-700 text-white"}
            />
            <Card
              title={`Total de ventas`}
              content={parseInt(data.sumTotal.total).toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            />
            <Card
              title={"Producto más vendido"}
              content={data.producto.nombre_producto}
            />

            <Card
              title={"Categoría más vendida"}
              content={data.maxCategory.categoria}
            />
          </div>
        </div>
      )
              :
              <>Aplicación tardará en iniciar ya que está hosteada gratis en render.com </>
    }
    </>
  );
};

export default Dashboard;
