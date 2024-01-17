import { useEffect } from 'react'
import { fetchCategorys } from '../services/categoryRequest';
import { useCategoryContext } from './useCategoryContext';

const useCategory = () => {

   const [stateCategory, dispatchCategory] =  useCategoryContext();

   useEffect(() => {
    async function getCategories() {
        const categories = await fetchCategorys();
        dispatchCategory({type: 'show', payload: categories})

    }
    getCategories();
    
   }, [dispatchCategory])

  return {stateCategory, dispatchCategory}
}

export default useCategory