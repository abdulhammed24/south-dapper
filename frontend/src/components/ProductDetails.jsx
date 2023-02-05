import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const totalPrice = product.price * quantity;

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/products/${id}`);
      setProduct(result.data);
      //console.log(result.data);
    };

    fetchData();
  }, [id]);

  const addToCartHandler = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <div className="productDetails">
      <div className="productDetailsDiv">
        <div className="productDetailsTop">
          <img src="/assets/uploads/products-page-heading.jpg" alt="" />
          <div className="productDetailsTexts">
            <h2>Single Product Page</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="productDetailsBottom">
          <div className="productDetailsBottomLeft">
            <div className="productDetailsBottomImg">
              <img
                src={`/assets/uploads/${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="productDetailsBottomImg">
              <img
                src={`/assets/uploads/${product.imageOne}`}
                alt={product.name}
              />
            </div>
          </div>
          <div className="productDetailsBottomRight">
            <div className="productDetailsBottomTexts">
              <div className="productDetailsBottomContent">
                <h4>{product.name}</h4>
                <span>
                  {product.star} <FaStar />
                </span>
              </div>
              <span className="productPrice">${product.price?.toFixed(2)}</span>

              <span className="productDesc">{product.description}</span>
            </div>
            <div className="productDetailsBottomSocials">
              <div className="productQuantity">
                <div className="productQuantityLeft">
                  <h6>No. of Orders</h6>
                </div>
                <div className="productQuantityRight">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    className="minus"
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="plus"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="productDetailsBottomSocials total">
              <div className="productTotal">
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
                <button className="border-2" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
