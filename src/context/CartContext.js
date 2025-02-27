import React,{createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    // Cart is an array of product items
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) =>{
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (index) =>{
        setCart((prevCart) => 
            prevCart.filter((_,itemIndex) => itemIndex !== index)
        );

    };

    return (
        <CartContext.Provider value={{cart, addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
