import Card from "../components/shared/Card";
import { Doughnut, Line } from "react-chartjs-2";
import useDashboard from "../hooks/useDashboard";
import Loading from "../components/shared/Loading";
import Chart from "../components/shared/Chart";



const Dashboard = () => {
  const { data, isLoading } = useDashboard();
  console.log(data)
  const labels = data ? data.soldProducts.map((sp) => sp.nombre_producto) : [];

  const options = {
    responsive: true,
    aspectRatio: 16 / 9,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const dataGraph = {
    labels,
    datasets: [
      {
        label: "Productos Vendidos",
        data: data && data.soldProducts.map((sp) => sp.cantidad),
        borderColor: "rgb(100, 210, 100)",
        backgroundColor: "rgba(98, 99, 255, 0.7)",
      },
    ],
  };
  const labelsD = data ? data.maxCategory.map((cg) => cg.categoria) : [];

  const dataDonut = {
    labels: labelsD,
    datasets: [{
      label: 'Cantidad Vendida',
      data: data && data.maxCategory.map((cg) => cg.cantidad),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      hoverOffset: 4
    }]
  };
  const fechaActual = new Date();
  const nombre_mes = fechaActual.toLocaleString("es", { month: "long" });

  if (isLoading) return <Loading />;
  return (
    <>
      {data ? (
        <>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-bold mb-4 capitalize shadow-sm border-b py-4 font-roboto">
              Dashboard de {nombre_mes}
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto p-4 mb-10">
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
              title={"Faltante"}
              content={(30000000 - data.sumTotal.total).toLocaleString(
                "es-CL",
                { style: "currency", currency: "CLP" }
              )}
            />

          </div>
         <div className="grid lg:flex gap-4">
         <Chart>
            <Line  options={options} data={dataGraph} />
          </Chart>
          <Chart>
          <Doughnut options={options} data={dataDonut}/>
          </Chart>
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
