import { ProductProvider } from "./ProductContext";
import { FilterableProductTable } from "./FilterableProductTable";

function TestUI() {
    return (
        <ProductProvider>
            <div>
                <FilterableProductTable />
            </div>
        </ProductProvider>
    );
}

export default TestUI;
