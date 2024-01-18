import React, { useEffect, useState } from 'react'
import Card from '../components/shared/Card'
import { fetchDashboard } from '../services/dashboardRequest';

const Dashboard = () => {

  const [maxProduct, setMaxProduct] = useState('');


useEffect(() => {
  async function getMaxProduct(){
    const maxProduct = await fetchDashboard()
    setMaxProduct(maxProduct)
  }
  getMaxProduct()
},[])

const {nombre_producto, count} = maxProduct 
const fechaActual = new Date();
const nombre_mes = fechaActual.toLocaleString('es', {month : 'long'})


  return (
    <>
    <div className="flex flex-col p-6">
    <h3 className="text-2xl font-semibold mb-4">Dashboard de {nombre_mes}</h3>
  </div>
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto p-4'>
        <Card 
    title={`Total de ventas`}
    content={''}
    footer={''}
    />
        <Card 
    title={'Producto más vendido'}
    content={nombre_producto}
    footer={count}
    />
   
     <Card 
    title={''}
    content={''}
    footer={''}
    />
     <Card 
    title={''}
    content={''}
    footer={''}
    />
    </div>
    </>
  )
}

export default Dashboard