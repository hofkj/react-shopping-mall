import React from "react";
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'

//사이트 상단 영역
function Header({cartItemCount, onSearch}) {
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <h1>리액트 쇼핑몰</h1>
                </Link>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="categoty/의류">의류</Link></li>
                    <li><Link to="categoty/전자기기">전자기기</Link></li>
                    <li><Link to="categoty/액세서리">액세서리</Link></li>
                </ul>
            </nav>

            <div>
                <SearchBar onSearch={onSearch}/>

                <div>
                    <Link to="/cart">
                        <span>shopping_cart</span>
                        {cartItemCount > 0 && (
                            <span>{cartItemCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;