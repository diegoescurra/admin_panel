import React from 'react'
import {useSortable} from '@dnd-kit/sortable'

const CardDashboard = ({children, props}) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: props.id
    })
    return (
    <article 
     className='flex justify-center items-center shadow-md p-4'>
        {children}
    </article>
  )
}

export default CardDashboard