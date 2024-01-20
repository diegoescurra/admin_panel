import { useEffect, useState } from "react";
import { fetchDashboard } from "../services/dashboardRequest";

const useDashboard = () => {
    
    const [data, setData] = useState({
        sumTotal: {},
        maxCategory: {},
        producto : {},
        soldProducts : []
      });
      const [isLoading, setIsLoading] = useState(false);


      useEffect(() => {
        async function getMaxProduct() {
          setIsLoading(true);
          try {
            const data = await fetchDashboard();
            setData(data);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        }
        getMaxProduct();
      }, []);
    
      return {
        data, isLoading
      }
}

export default useDashboard