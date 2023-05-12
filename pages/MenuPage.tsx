import React from 'react';

const MenuPage = () => {
  return (
    <div className="container">
      <h2 className="title">Our Menu</h2>
      <ul className="menuList">
        <li className="menuItem">
          <div className="itemContainer">
            <div className="itemImage">
              <img
                src="https://breadsandsweets.com/wp-content/uploads/2021/08/croissant-sq2.jpg"
                alt="Croissant"
                width="150"
                height="150"
              />
            </div>
            <div className="itemDetails">
              <h3 className="itemTitle">Croissant</h3>
              <p className="itemDescription">
                Flaky pastry with a buttery taste. Perfect for a delightful
                breakfast or snack.
              </p>
              <span className="itemPrice">$2.99</span>
            </div>
          </div>
        </li>
        <li className="menuItem">
          <div className="itemContainer">
            <div className="itemImage">
              <img
                src="https://www.thegunnysack.com/wp-content/uploads/2023/01/Two-Ingredient-Dough-Baguette-Recipe-Loaves-SQ.jpg"
                alt="Baguette"
                width="150"
                height="150"
              />
            </div>
            <div className="itemDetails">
              <h3 className="itemTitle">Baguette</h3>
              <p className="itemDescription">
                Traditional French bread with a crispy crust. Enjoy it as a side
                or with your favorite spreads.
              </p>
              <span className="itemPrice">$4.99</span>
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default MenuPage;
