import { createContext, useContext, useState, ReactNode } from 'react';

interface ProductContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isStockOnly: boolean;
  setIsStockOnly: (stockOnly: boolean) => void;
}

// Khởi tạo Context
const ProductContext = createContext<ProductContextType | null>(null);

// Hook để sử dụng Context
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProductContext must be used within a ProductProvider');
  return context;
};

// Provider Component
export function ProductProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <ProductContext.Provider value={{ searchTerm, setSearchTerm, isStockOnly, setIsStockOnly }}>
      {children}
    </ProductContext.Provider>
  );
}
