import React from "react";
import {Link} from 'react-router-dom'

function productItem({product, addToCart}) {
    const {id, name, price, imageUrl, category} = product;

    //장바구니에 추가
    const handleAddToCart = () => {
        addToCart(product);
    }

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    }

    return (
        <div>
            <div>
                <Link to={`/product/${id}`}>
                    <img src={imageUrl} alt={name}></img>
                </Link>
            </div>

            <div>
                <span>{category}</span>
                <h3>
                    <Link to={`/product/${id}`}>{name}</Link>
                </h3>
                <p>{formatPrice(price)}</p>
            </div>

            <div>
                <button onClick={handleAddToCart}>장바구니에 추가</button>
            </div>
        </div>
    )
}

export default productItem;