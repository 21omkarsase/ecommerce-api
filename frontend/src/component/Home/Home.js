import React from "react";
import "./Home.css";
import Product from "./Product";

const products = [
  {
    name: "Blue Tshirt",
    images: [{ url: "https://source.unsplash.com/random/?fashion" }],
    price: "4000",
    _id: "omkar",
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "https://source.unsplash.com/random/?shirt" }],
    price: "4000",
    _id: "omkar",
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "https://source.unsplash.com/random/?dress" }],
    price: "4000",
    _id: "omkar",
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "https://source.unsplash.com/random/?jeans" }],
    price: "4000",
    _id: "omkar",
  },
];

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Home;
