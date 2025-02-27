import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Navbar = () =>{
    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar nav-bar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">My Store</Link>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul classname="navbar-nav me-auto">
                            <li className="nav-nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                        <Link className="btn btn-primary" to="/cart">
                        🛒 Cart ({cart.length})
                        </Link>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;