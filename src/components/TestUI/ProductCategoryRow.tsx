import React from 'react';
import { ProductRow } from './ProductRow';
import { Product } from './product';

interface ProductCategoryRowProps {
  category: string;
  products: Product[];
}

export const ProductCategoryRow: React.FC<ProductCategoryRowProps> = React.memo(
  ({ category, products }) => {
    return (
      <>
        <tr>
          <th colSpan={2}>{category}</th>
        </tr>
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <ProductRow key={product.name} product={product} />
          ))}
      </>
    );
  },
);
