import { TableCell, TableRow } from '@mui/material';
import { Product } from './product';

function ProductCategory({ product }: { product: Product }) {
  return (
    <TableRow>
      <TableCell sx={!product.stocked ? { color: 'red' } : {}}>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
    </TableRow>
  );
}

export default ProductCategory;
