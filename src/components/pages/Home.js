import { useContext} from "react";
import ProductContext from "../../store/products-context"

import Layout from "../UI/Layout"
import Navbar from "../layout/Navbar";
import ProductList from "../layout/ProductList";

function Home(){
    const productsCtx = useContext(ProductContext);
    const categories = productsCtx.products.categories
    const products = productsCtx.products.products;

    return(
        <Layout>
            < Navbar  categories={categories}/>
            < ProductList products={products}   />
        </Layout>
    )
};

export default Home;