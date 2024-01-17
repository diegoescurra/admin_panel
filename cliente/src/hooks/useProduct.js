import { useEffect } from "react";
import { fetchProducts } from "../services/productsRequest";
import { useProductContext } from "./useProductsContext";

const useProduct = () => {

    const [state, dispatch] = useProductContext()

    useEffect(() => {
      async function getProducts() {
        const products = await fetchProducts();
        dispatch({type: 'show', payload: products})
  
      }
      getProducts();
  
    }, [dispatch]);

    return {state, dispatch }
}

export default useProduct
