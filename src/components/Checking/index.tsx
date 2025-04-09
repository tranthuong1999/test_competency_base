import { useState } from 'react';
import { Product, PRODUCTS } from './product';
import SearchBar from './SeachBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState('');
  const [isStock, setIsStock] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onChangeFilterText={setFilterText}
        isStock={isStock}
        onChangeFilterStock={setIsStock}
      />
      <ProductTable filterText={filterText} isStock={isStock} products={products} />
    </div>
  );
}

export default function CheckingUI() {
  return (
    <div className="list_app">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
