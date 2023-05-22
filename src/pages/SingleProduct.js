import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;

  return (
    <section className="section-product">
      <div className="product-info">
        <img src={image} alt={name} className="product-img" />
        <h4 className="name">{name}</h4>
      </div>

      <Link to="/products" className="btn">
        back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
