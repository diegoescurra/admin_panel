import { useEffect, useState } from 'react'
import { fetchCategories } from '../services/categoryRequest';
import { useCategoryContext } from './useCategoryContext';

const useCategory = () => {

   const [stateCategory, dispatchCategory] =  useCategoryContext();
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
    async function getCategories() {
        setIsLoading(true)
       try {
        const categories = await fetchCategories();
        dispatchCategory({type: 'show', payload: categories})
       } catch (error) {
        console.log(error)
       } finally {
        setIsLoading(false)
       }

    }
    getCategories();
    
   }, [dispatchCategory])

  return {isLoading, stateCategory, dispatchCategory}
}

export default useCategory