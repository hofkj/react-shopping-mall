import React from "react";
import Cart from '../components/Cart'

function CartPage({cartItems, updateQuantity, removeFromCart, clearCart}) {
    return(
        <div>
            <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}/>
        </div> 
    )
}