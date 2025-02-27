import React,{ useContext, useState} from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCart";
import SearchBar from "./SearchBar";


const ProductGrid = () =>{
    const { products } = useContext(ProductContext)
    const [searchQuery, setSearchQuery] = useState("")

    // Filter products  based on search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="row">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
        </>
    );
};

export default ProductGrid;