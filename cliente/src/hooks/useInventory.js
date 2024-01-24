import { useEffect, useState } from "react"
import { fetchInventory } from "../services/inventoryRequest";

const useInventory = (id) =>  {

    const [inventory, setInventory] = useState('');

    useEffect(() => {
        async function getInventario() {
            const inventario = await fetchInventory(id);
            setInventory(inventario)
        }
        getInventario();
    }, [id])
    return {inventory}
}


export default useInventory