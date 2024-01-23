import Card from "../components/shared/Card";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useDashboard from "../hooks/useDashboard";
import Loading from "../components/shared/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { data, isLoading } = useDashboard();

  const options = {
    responsive: true,
    aspectRatio: 16 / 9,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = data ? data.soldProducts.map((sp) => sp.nombre_producto) : [];

  const dataGraph = {
    labels,
    datasets: [
      {
        label: "Productos Vendidos",
        data: data && data.soldProducts.map((sp) => sp.cantidad),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const fechaActual = new Date();
  const nombre_mes = fechaActual.toLocaleString("es", { month: "long" });

 if (isLoading) return <Loading />
  return (
    <>
      {data ? (
        <>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold mb-4 capitalize">
              Dashboard de {nombre_mes}
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto p-4 mb-10">
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
          <div className="relative lg:w-[700px] w-80">
            <Line options={options} data={dataGraph} />
          </div>
        </>
      ) : (
        <>
          Aplicación tardará en iniciar ya que está hosteada gratis en
          render.com{" "}
        </>
      )}
    </>
  );
};

export default Dashboard;
