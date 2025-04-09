import { TableCell, TableRow } from '@mui/material';

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <TableRow>
      <TableCell>{category}</TableCell>
    </TableRow>
  );
}

export default ProductCategoryRow;
