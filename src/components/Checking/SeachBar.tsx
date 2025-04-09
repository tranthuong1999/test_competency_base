import { Checkbox } from '@mui/material';

function SearchBar({
  filterText,
  onChangeFilterText,
  isStock,
  onChangeFilterStock,
}: {
  filterText: string;
  onChangeFilterText: any;
  isStock: boolean;
  onChangeFilterStock: any;
}) {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={filterText}
          onChange={(e) => onChangeFilterText(e.target.value)}
        />
      </div>
      <div>
        <Checkbox value={isStock} onChange={(e) => onChangeFilterStock(e.target.checked)} />
        <span> Only showp products in stock</span>
      </div>
    </div>
  );
}

export default SearchBar;
