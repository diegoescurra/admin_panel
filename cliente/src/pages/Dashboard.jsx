import Card from "../components/shared/Card";
import useDashboard from "../hooks/useDashboard";
import Loading from "../components/shared/Loading";
import Rechart from "../components/shared/Rechart";

const Dashboard = () => {
  const { data, isLoading } = useDashboard();

  const productosVendidos = data?.soldProducts.map((item) => ({
    ...item,
    cantidad: Number(item.cantidad),
  }));

  const categoriasVendidas = data?.maxCategory.map((item) => ({
    ...item,
    cantidad: Number(item.cantidad),
  }));

  const totalClientes = data?.totalClients.map((item) => ({
    ...item,
    total: Number(item.total),
  }));


  const dataCards = [
    {
      title: "Objetivo",
      content: "$30.000.000",
      className: "bg-sky-700 text-white"
    },
    {
      title:`Total de ventas`,
      content: parseInt(data.sumTotal.total).toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
      })
    },
    {
      title: "Faltante",
      content: (30000000 - data.sumTotal.total).toLocaleString(
        "es-CL",
        { style: "currency", currency: "CLP" }
      )
    }
  ]

  const formatFecha = (date) => {
    return new Date(date).toLocaleDateString("es-CL", {
      month: "long",
      year: "numeric"
    })

  }

  return (
    <>
      {data ? (
        <>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-bold mb-4 capitalize shadow-sm border-b py-4 font-roboto">
              Dashboard de {formatFecha(Date.now())}
            </h3>
          </div>
        {isLoading ? <Loading /> : (
           <>
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto p-4 mb-10">    
            {dataCards.map((data) => (
             <Card key={data.title} title={data.title} content={data.content} className={data.className} />
            ))}        
           </section>
 
           <section>                
              <Rechart productosVendidos={productosVendidos} categoriasVendidas={categoriasVendidas} totalClientes={totalClientes}/>           
           </section>
           </>
        )}
        </>
      ) : (
        <>
         No se encontró data
        </>
      )}
    </>
  );
};

export default Dashboard;
