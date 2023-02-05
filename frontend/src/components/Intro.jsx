import React from 'react'
import {Link} from 'react-router-dom'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="introLeft">
        <div className="introLeftDiv">
          <div className="introLeftContent">
            <h2 className="introTitle">We are RicpeShop</h2>
            <Link to='/products' className='introLink'>Purchase Now!</Link>
          </div>
          <img src="./assets/uploads/left-banner-image.jpg" alt="" />
        </div>
      </div>
      <div className="introRight">
        <div className="introRightDiv">
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Women</h3>
                <p className="introRightDesc">Best Clothes for Women</p>
              </div>
              <img src="./assets/uploads/baner-right-image-01.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Women</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Men</h3>
                <p className="introRightDesc">Best Clothes for Men</p>
              </div>
              <img src="./assets/uploads/baner-right-image-02.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Men</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Kids</h3>
                <p className="introRightDesc">Best Clothes for Kids</p>
              </div>
              <img src="./assets/uploads/baner-right-image-03.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Kids</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Accessories</h3>
                <p className="introRightDesc">Best Trend for Accessories</p>
              </div>
              <img src="./assets/uploads/baner-right-image-04.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Accessories</h3>
                <p className="introRightTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro