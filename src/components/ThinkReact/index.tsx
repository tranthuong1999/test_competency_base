
import React, { useState } from "react";
import { PRODUCTS } from "./data";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isStockOnly, setIsStockOnly] = useState(false);

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isStockOnly={isStockOnly} setIsStockOnly={setIsStockOnly} />
            <ProductTable products={PRODUCTS} searchTerm={searchTerm} isStockOnly={isStockOnly} />
        </div>
    );
}