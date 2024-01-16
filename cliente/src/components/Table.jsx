import {Link} from 'react-router-dom'

const Table = ({rows, columns}) => {

  return (
    <table className="w-full text-left border-collapse">
    <thead>
      <tr>
        {columns.map((title) => (
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light" key={title}>
                {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr
          className="hover:bg-grey-lighter hover:bg-gray-100"
          key={row.id || rowIndex}
        >
            {Object.values(row).map((cell, cellIndex) => (
               cellIndex !== 0 && <td className="py-4 px-6 border-b border-grey-light  gap-2" key={cellIndex}>
                    {cell}
                </td>
            ))}
            <td className="py-4 px-6 border-b border-grey-light flex gap-2">
               <Link to={`/productos/editar/${row.id}`} className="bg-gray-700 text-white p-2 rounded hover:bg-gray-500">
                Editar
               </Link>
               <Link className="bg-gray-700 text-white p-2 rounded hover:bg-gray-500">
                Borrar
               </Link>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table