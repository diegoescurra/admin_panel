import { useContext } from "react"
import { CategoryContext } from "../context/CategoryContext";

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    if (context === undefined) {
       throw new Error('useCategory must be in a CategoryProvider')
    }

    return context
} 