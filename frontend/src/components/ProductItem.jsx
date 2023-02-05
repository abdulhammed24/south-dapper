import React from 'react'
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
  return (
    <div className='sliderImgDiv'>
        <div className="sliderImgTop product">
            <div className="sliderImgTopInner">
                <img src={`./assets/uploads/${product.image}`} alt={product.name} className="sliderImage" />
            </div>
            <div className="sliderImgTopHover">
                <Link to={`/product/${product._id}`} className="sliderImgLink">
                <FaEye />
                </Link>
                <Link to='/' className="sliderImgLink">
                <FaStar />
                </Link>
                <Link to='/' className="sliderImgLink">
                <FaShoppingCart />
                </Link>
            </div>
        </div>
        <div className="sliderImgBottom">
            <div className="sliderImgBottomTop productTop">
                <h3 className="sliderImgTitle productTitle">{product.name}</h3>
                <span className="sliderImgStar">{product.star} <FaStar /></span>
            </div>
            <div className="sliderImgBottomBottom">
                <h4 className="sliderImgPrice">${(product.price).toFixed(2)}</h4>
            </div>
        </div>
    </div>
  )
}

export default ProductItem