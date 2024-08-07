import Card from "../components/shared/Card";
import useDashboard from "../hooks/useDashboard";
import Loading from "../components/shared/Loading";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Rectangle } from 'recharts';



const Dashboard = () => {
  const { data, isLoading } = useDashboard();
  console.log(data)

  const productosVendidos = data?.soldProducts.map(item => ({
    ...item,
    cantidad: Number(item.cantidad)
  }));

  const categoriasVendidas = data?.maxCategory.map(item => ({
    ...item,
    cantidad: Number(item.cantidad)
  }));

  const totalClientes = data?.totalClients.map(item => ({
    ...item,
    total: Number(item.total)
  }))


  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex gap-4 justify-center">
        {
          payload.map((entry, index) => (
            <span key={`item-${index}`} style={{ color: entry.color }}>
              <span style={{ color: entry.color, marginRight: 8 }}>■</span>
              {entry.payload.categoria}
            </span>
          ))
        }
      </div>
    );
  };

  const COLORS = ['#8884d8', '#00C49F', '#FFBB28'];


  if (isLoading) return <Loading />;
  return (
    <>
    {data ? (
        <>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-bold mb-4 capitalize shadow-sm border-b py-4 font-roboto">
              Dashboard de Agosto
            </h3>
          </div>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto p-4 mb-10">
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

          </section>
         

       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[56rem] lg:h-96 gap-2">
      <article className="flex justify-center items-center shadow-md p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={productosVendidos}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre_producto" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cantidad" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
      </article>
      <article className="flex justify-center items-center shadow-lg p-4">
   <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={categoriasVendidas}
            cx="50%"
            cy="50%"
            labelLine={false}
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="cantidad"
          >
            {categoriasVendidas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
      </article>
      <article className="flex justify-center items-center shadow-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={totalClientes}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#00aae4" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
      </article>
       </section>

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
