import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isStockOnly: boolean;
  setIsStockOnly: (value: boolean) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  isStockOnly,
  setIsStockOnly,
}: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={(e) => setIsStockOnly(e.target.checked)}
        />{' '}
        Only show products in stock
      </label>
    </div>
  );
}
