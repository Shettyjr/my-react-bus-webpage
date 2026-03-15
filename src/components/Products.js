import React from "react";
import Productcard from "./Productcard";
import ProductsData from "../data/Products";

function Products() {
  return (
    <section className="products">

      <h2>Our Products</h2>

      <div className="product-grid">

        {ProductsData.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}

      </div>

    </section>
  );
}

export default Products;