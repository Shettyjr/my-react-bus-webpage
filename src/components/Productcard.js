import React from "react";

function ProductCard({ product }) {

  const whatsappLink =
    "https://wa.me/2349036960361?text=Hello%20I%20want%20to%20order%20" +
    product.name;

  return (
    <div className="card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">{product.price}</p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="order-btn"
      >
        Order on WhatsApp
      </a>

    </div>
  );
}

export default ProductCard;