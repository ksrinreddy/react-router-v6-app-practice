import React from "react";
import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-list">
        {products.map((product) => {
          return (
            <article key={product.id} className="product">
              <h4 className="product-name">{product.name}</h4>
              <Link to={`/products/${product.id}`} className="more-info">
                more info
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
