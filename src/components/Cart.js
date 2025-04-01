import React from "react";
import { Link } from "react-router-dom";
import CartItem from './CartItem';

function Cart({cartItems, updateQuantity, removeFromCart, clearCart}) {

    //총 금액 계산
    const calculateTotal=() =>{
        return cartItems,reduce((total, item)=>{
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    //결제하기..
    const hanldeCheckout=()=>{
        alert('결제 프로세스로 넘어갑니다. (구현되지않음)')
    }

    return(
        <div>
            <h2>장바구니</h2>

            {cartItems.length===0?(
                <div>
                    <p>장바구니가 비어있습니다.</p>
                    <Link to="/">쇼핑 계속하기</Link>
                </div>
            ):(
                <>
                    <div>
                        <sapn>상품</sapn>
                        <sapn>수량</sapn>
                        <sapn>합계</sapn>
                        <sapn></sapn>
                    </div>

                    <div>
                        {cartItems.map(item=>(
                            <CartItem
                            key={item.product.id}
                            item={item}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}/>
                        ))}
                    </div>

                    <div>
                        <button onClick={clearCart}>장바구니 비우기</button>
                        <div>
                            <p>총 상품 금액 : <sapn>{formatPrice(calculateTotal())}</sapn></p>
                            <p>배송비 : <sapn>{cartItems.length>0? '무료배송' : '0원'}</sapn></p>
                            <p>
                                결제 금액 : <sapn>{formatPrice(calculateTotal())}</sapn>
                            </p>
                        </div>
                    </div>

                    <div>
                        <Link to="/">쇼핑 계속하기</Link>
                        <button onClick={hanldeCheckout}>결제하기</button>
                    </div>
                </>
            )}
        </div>
    )

}

export default Cart;