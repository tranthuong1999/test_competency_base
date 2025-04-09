import React from 'react';
import { Product } from './product';

interface ProductRowProps {
  product: Product;
}

export const ProductRow: React.FC<ProductRowProps> = React.memo(({ product }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
});
