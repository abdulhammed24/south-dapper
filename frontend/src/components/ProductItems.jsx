import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'

const ProductItems = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/product/all");
            setProducts(result.data);
            //console.log(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className='productsItems'>
            <div className="productsItemsDiv">
                <div className="productsItemsTop">
                    <img src="./assets/uploads/products-page-heading.jpg" alt="" />
                    <div className="productsItemsTexts">
                        <h2>Check Our Products</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                </div>
            </div>
            <div className="productsItemsOthers">
                <div className="productsItemsContent">
                    <h2>Our Latest Products</h2>
                    <span>Check out all of our products.</span>
                </div>
                {products.length === 0 ? (<h4 className='noProducts'>There are currently no products!</h4>) : (
                    <div className="productsItemsImages">
                        {products.map((product) => (
                            <ProductItem product={product} key={product._id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductItems