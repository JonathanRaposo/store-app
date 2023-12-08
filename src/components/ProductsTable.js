import ProductRow from "./ProductRow"
const ProductsTable = ({ filteredProducts }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {filteredProducts.map((product) => <ProductRow key={product._id} product={product} />)}
            </tbody>

        </table>
    );
}

export default ProductsTable;