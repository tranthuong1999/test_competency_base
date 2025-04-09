import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}
