import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Product } from './product';
import ProductCategoryRow from './ProductCategoryRow';
import ProductCategory from './ProductCategory';

function ProductTable({
  filterText,
  isStock,
  products,
}: {
  filterText: string;
  isStock: boolean;
  products: Product[];
}) {
  const rows: any[] = [];
  let lastCategory: string | null = null;

  products.forEach((product: Product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if (isStock && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductCategory product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
