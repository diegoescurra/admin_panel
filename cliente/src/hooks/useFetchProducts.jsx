import { useEffect } from "react";
import { fetchProducts } from "../services/productsRequest";
import { useContext } from "react";
import { Context } from "../context/ProductContext";

const useFetchProducts = () => {

    const [state, dispatch] = useContext(Context);

    useEffect(() => {
      async function getProducts() {
        const products = await fetchProducts();
        dispatch({type: 'show', payload: products})
  
      }
      getProducts();
  
    }, [dispatch]);

    return state  
}

export default useFetchProducts
