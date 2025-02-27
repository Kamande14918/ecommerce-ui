import React,  { useContext} from "react";
import { CartContext } from "../context/CartContext";

const CartOffcanvas = () =>{
    const { cart, removefromcart} = useContext(CartContext);
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="cartOffcanvas"
            aria-labelledby="cartOffcanvasLabel"
            >
                <div className="offcanvas-header">
                    <h5 id="cartOffcanvasLabel">Shopping Cart</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {cart.length > 0 ? (
                        <ul className="list-group">
                            {cart.map((item,index) => (
                                <li 
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                        {item.name} - {item.price}
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removefromcart(index)}
                                            >
                                                ❌
                                            </button>
                                    </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Your cart is empty.</p>
                    )
                }
                </div>
            </div>
    );
};

export default CartOffcanvas;