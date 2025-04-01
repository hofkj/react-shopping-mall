import React, {useState} from "react";

function SearchBar({onSearch}) {
    const[searchTerm, setSearchTerm] = useState('')

    const handleChange=(e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="상품 검색..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">
                    <span>search</span>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;


