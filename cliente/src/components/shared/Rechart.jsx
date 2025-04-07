import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Rectangle } from 'recharts';


const MyComponent = ({ productosVendidos, categoriasVendidas, totalClientes }) => {

console.log(totalClientes)

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center items-center text-xs md:text-base gap-2  sm:gap-4 ">
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

  const graficos = [
    {
      id: 1,
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={productosVendidos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre_producto" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cantidad" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 2,
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={categoriasVendidas} cx="50%" cy="50%" labelLine={false} label outerRadius={80} fill="#8884d8" dataKey="cantidad">
              {categoriasVendidas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 3,
      component: (
      
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
          <XAxis dataKey="nombre"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#14213D" activeBar={<Rectangle fill="white" stroke="orange" />} />
        </BarChart>
      </ResponsiveContainer>
      
      ),
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full h-[56rem] lg:h-96 '>
      {graficos.map((grafico) => (
        <div key={grafico.id} >
          {grafico.component}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
