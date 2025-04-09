import React from 'react';

interface ProductRowProps {
  product: {
    name: string;
    price: string;
    stocked: boolean;
  };
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <tr>
      <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
