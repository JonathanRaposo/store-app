import producstData from '../products-data.json';
import { useState } from 'react';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';


const ProductsPage = () => {
    const [products, setProducts] = useState(producstData);
    const [query, setQuery] = useState('');
    const [inStock, setInStock] = useState(false)

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const toggleinStockFilter = () => {
        setInStock(!inStock);
    }

    const getFilteredProducts = (query, items) => {
        const filteredProducts = products.filter((product) => (
            product.name.toLowerCase().includes(query.toLowerCase())
        ))
        if (!filteredProducts.length) {
            return items;
        }
        return filteredProducts;
    }
    let filteredProducts = getFilteredProducts(query, products);
    filteredProducts = inStock ? products.filter((product) => product.inStock) : filteredProducts
    // if (inStock) {
    //     filteredProducts = products.filter((product) => product.inStock)
    // }


    return (
        <div className='ProducstPage'>
            <h1>Store</h1>
            <SearchBar handleQuery={handleQuery} inStock={inStock} toggleinStockFilter={toggleinStockFilter} />
            <ProductsTable filteredProducts={filteredProducts} />
        </div>
    );
}

export default ProductsPage;