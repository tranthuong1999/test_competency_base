import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface ProductTableProps {
  products: Product[];
  searchTerm: string;
  isStockOnly: boolean;
}

export default function ProductTable({ products, searchTerm, isStockOnly }: ProductTableProps) {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!isStockOnly || product.stocked),
  );

  const groupedProducts: Record<string, Product[]> = {};
  filteredProducts.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(groupedProducts).map((category) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {groupedProducts[category].map((product) => (
              <ProductRow key={product.name} product={product} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
