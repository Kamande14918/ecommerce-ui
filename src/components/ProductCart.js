import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ProductCard = ({ product }) =>{
    const { addToCart } = useContext(CartContext);

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt="product.name"
                    style={{ height: "200px", objectFit: "cover"}}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-primary"
                                onClick={() => addToCart(product)}
                                >Add to CartContext
                                </button>
                                <Link className="btn btn-outline-secondary" to={`/product/${product.id}`}>
                                View
                                </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;