import { useContext } from "react"
import { Context } from "../context/ProductContext"

export const useProductContext = () => {
    const context = useContext(Context);

    if (context === undefined) {
       throw new Error('useProduct must be in a ProductProvider')
    }

    return context
} 