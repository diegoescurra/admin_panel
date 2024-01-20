import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsRequest";
import { useProductContext } from "./useProductsContext";

const useProduct = () => {

    const [state, dispatch] = useProductContext();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      async function getProducts() {
        setIsLoading(true)
        try {
          const products = await fetchProducts();
         dispatch({type: 'show', payload: products})
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
  
      }
      getProducts();
  
    }, [dispatch]);

    return {state, dispatch, isLoading }
}

export default useProduct
