import React from "react";

function Hero() {
  return (
    <section className="hero">

        <div className="logo-container">
            <img src="my logo.jpeg" alt="M.A SHETTIMA LOGO"
            className="logo"  
            />
        </div>

      <h1>M.A. SHETTIMA Goods</h1>

      <p>
        Importing quality Bags & Kitchen Appliances
        from China to Nigeria
      </p>
      <br/>

      <a
        href="https://wa.me/2349036960361"
        className="main-btn"
      >
        Order Now
      </a>

    </section>
  );
}

export default Hero;