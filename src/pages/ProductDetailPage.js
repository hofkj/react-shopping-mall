import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailPage({products, addToCart}) {
    const{id} = useParams()
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p=>p.id==parseInt(id))

    if(!product) {
        return(
            <div>
                <h2>상품을 찾을 수 없습니다.</h2>
                <Link to="/">홈으로 돌아가기</Link>
            </div>
        )
    }

    const handleIncrease=()=>{
        setQuantity(quantity+1)
    }

    const handledDecrease=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    const handleAddToCart=()=>{
        addToCart(product, quantity)
    }

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "원")
    }

    return(
        <div>
            <div>
                <div>
                    <img src={product.imageUrl} alt={product.name}/>
                </div>

                <div>
                    <span>{product.category}</span>
                    <h1></h1>
                </div>







                <div>
                    <div>
                        <button onClick={}></button>
                    </div>
                </div>

            </div>
        </div>
    )
}
