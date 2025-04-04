import React,{useState} from "react";
import {useParams, Link} from "react-router-dom"; // URL 파라미터 가져오기, useParams - 상품마다 하나의 컴포넌트로 url을 다르게 설정

function ProductDetailPage({products, addToCart}) {
    const {id} = useParams(); // URL 파라미터에서 id 가져오기
    const [quantity, setQuantity] = useState(1); // 수량 상태 관리(초기값 : 1)
    
    const product = products.find(p => p.id === parseInt(id)); // id에 해당하는 상품 찾기
//    조건부 렌더링
    if(!product){
        return(
            <div>
                <h2>상품을 찾을 수 없습니다.</h2>
                <Link to="/">홈으로 돌아가기</Link>
            </div>
        )
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1); // 수량 증가
    }
    const handleDecrease = () => {
        if(quantity > 1){ // 수량이 1보다 클 때만 감소
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => { 
        addToCart(product, quantity); // 장바구니에 상품 추가
        
    }
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\c))/g, ",") + "원";
    };

    return(
        <div>
            <div>
                <img src={product.imgUrl} alt={product.name}></img>
            </div>

            <div>
                <span>{product.category}</span>
                <h1>{product.name}</h1>
                <p>{formatPrice(product.price)}</p>
            </div>

            <div>
                <h3>상품 설명</h3>
                <p>{product.description}</p>
            </div>

            <div>
                <div>
                    <button onClick={handleDecrease} disabled={quantity<=1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}></button>
                </div>
                <button onClick={handleAddToCart}>장바구니에 추가</button>
            </div>

            <div>
                <Link to="/">계속 쇼핑하기</Link>
            </div>

        </div>
    )
}
export default ProductDetailPage;