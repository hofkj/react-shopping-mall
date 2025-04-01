import productItem from './ProductItem';

function ProductItem({product, addToCart, CategoryFilter, searchTerm}) {
    //카테고리 필터 적용
    let filteredProducts = CategoryFilter
    ? ProductList.filter(product=>product.category===CategoryFilter)
    : ProductList;

    //검색어 필터
    if(searchTerm) {
        filteredProducts = filteredProducts.filter(product=>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }

    return(
        <div>
            {filteredProducts.length===0?(
                <div>
                    <p>검색 결과가 없습니다.</p>
                </div>
            ):(
                <div>
                    {filteredProducts.map(product=>(
                        <productItem
                            key={product.id}
                            product={product}
                            addToCart={addToCart}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductList;