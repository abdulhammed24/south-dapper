import React from 'react'
import Slider from "react-slick";
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const WomenLatest = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="latestContainer" id="women">
      <div className="latestDiv">
        <div className="latestTetxs">
          <h3 className="latestTitle">Women's Latest</h3>
          <p className="latestDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="latestDivImg">
          <div className="latestDivContent">
            <Slider {...settings}>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img src="./assets/uploads/women-01.jpg" alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/product/3423' className="sliderImgLink">
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
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">New Green Jacket</h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$75.00</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img src="./assets/uploads/women-02.jpg" alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/' className="sliderImgLink">
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
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">Classic Dress</h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$45.00</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img src="./assets/uploads/women-03.jpg" alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/' className="sliderImgLink">
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
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">Spring Collection</h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$130.00</h4>
                  </div>
                </div>
              </div>
              <div className='sliderImgDiv'>
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img src="./assets/uploads/women-01.jpg" alt="" className="sliderImage" />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to='/' className="sliderImgLink">
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
                  <div className="sliderImgBottomTop">
                    <h3 className="sliderImgTitle">New Green Jacket</h3>
                    <span className="sliderImgStar">5 <FaStar /></span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$75.00</h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomenLatest