import React from 'react';

interface ProductCategoryRowProps {
  category: string;
}

export default function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2} style={{ textAlign: 'left' }}>
        {category}
      </th>
    </tr>
  );
}
