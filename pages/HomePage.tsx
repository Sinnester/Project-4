import React from 'react';
import Header from '../components/Header';
import '../style.css';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="title">Welcome to Our Bakery</h1>
      <div className="image-container">
        <img
          src="https://breadsandsweets.com/wp-content/uploads/2021/08/croissant-sq2.jpg"
          alt="Croissant"
          width="100"
          height="100"
          className="left-photo"
        />
      </div>
      <div className="image-container">
        <img
          src="https://www.thegunnysack.com/wp-content/uploads/2023/01/Two-Ingredient-Dough-Baguette-Recipe-Loaves-SQ.jpg"
          alt="Baguette"
          width="100"
          height="100"
          className="right-photo"
        />
      </div>
      <p className="description">
        Indulge in the warm and comforting flavors of our freshly baked goods.
        We take pride in using high-quality, organic ingredients sourced locally
        from trusted suppliers. From flaky croissants to mouthwatering pastries,
        our bakery is dedicated to crafting delicious treats for every occasion,
        whether it's a cozy morning breakfast, an afternoon tea, or a special
        celebration. Experience the aroma and taste of our artisanal creations,
        made with love and care, that will surely delight your senses and leave
        you craving for more.
      </p>

      <hr />
    </div>
  );
};

export default HomePage;
