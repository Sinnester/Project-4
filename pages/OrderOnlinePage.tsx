import React, { useState } from 'react';

const OrderOnlinePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem === item);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotalAmount = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
  };

  const handleOrderNow = () => {
    console.log('Order Now clicked');
  };

  return (
    <div className="container">
      <h2 className="title">Online Ordering</h2>
      <p className="description">Select the items you want to order:</p>
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
                Flaky pastry with a buttery taste. - $2.99
              </p>
              <button
                className="button"
                onClick={() =>
                  addToCart({ id: 1, name: 'Croissant', price: 2.99 })
                }
              >
                Add to Cart
              </button>
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
                Traditional French bread with a crispy crust. - $4.99
              </p>
              <button
                className="button"
                onClick={() =>
                  addToCart({ id: 2, name: 'Baguette', price: 4.99 })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </li>
      </ul>
      <hr />
      <h3 className="cartTitle">Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cartList">
            {cartItems.map((item) => (
              <li key={item.id} className="cartItem">
                <h3 className="itemTitle">{item.name}</h3>
                <p className="itemPrice">Price: ${item.price}</p>
                <button
                  className="removeButton"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="totalAmount">Total: ${calculateTotalAmount()}</p>
          <button className="button" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderOnlinePage;
