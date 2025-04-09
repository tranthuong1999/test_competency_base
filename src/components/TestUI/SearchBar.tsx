import { useProductContext } from './ProductContext';
import React from 'react';

export const SearchBar: React.FC = React.memo(() => {
  const { searchTerm, setSearchTerm, isStockOnly, setIsStockOnly } = useProductContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={(e) => setIsStockOnly(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
});
