import { ProductProvider } from "./ProductContext";
import { CategoryProvider } from "./CategoryContext";

const AppProvider = ({ children }) => {
  return (
    <CategoryProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </CategoryProvider>
  );
};

export default AppProvider;
