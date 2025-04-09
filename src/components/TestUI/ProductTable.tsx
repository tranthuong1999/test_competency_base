import { useMemo } from 'react';
import { useProductContext } from './ProductContext';
import { Product, PRODUCTS } from './product';
import { ProductCategoryRow } from './ProductCategoryRow';

export function ProductTable() {
  const { searchTerm, isStockOnly } = useProductContext();

  // Lọc sản phẩm bằng useMemo để tránh re-render không cần thiết
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product: Product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!isStockOnly || product.stocked)
      );
    });
  }, [searchTerm, isStockOnly]);

  const categories = Array.from(new Set(filteredProducts.map((p) => p.category)));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <ProductCategoryRow key={category} category={category} products={filteredProducts} />
        ))}
      </tbody>
    </table>
  );
}
