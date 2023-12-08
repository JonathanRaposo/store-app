
const SearchBar = ({ handleQuery, inStock, toggleinStockFilter }) => {

    return (
        <div className='SearchBar'>
            <label>Search</label>
            <input type="text" onChange={handleQuery} />
            <br />

            <input type="checkbox" checked={inStock} onChange={toggleinStockFilter} id="check-box" />
            Only show products in stock
        </div>
    )
}

export default SearchBar;