import React,{ createContext } from "react";
import products from "../data/products";

export const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
}