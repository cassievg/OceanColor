import React from 'react';
import { useCart } from '../Context/CartContext';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom
import './Cart.css'; // Custom styles for cart

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace('IDR ', '').replace(',', '')) * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-wrapper">
        <h2 className="cart-title">Your Cart</h2>
        <Table striped bordered hover responsive className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td> {/* Displaying quantity without input */}
                <td>
                  {(
                    parseFloat(item.price.replace('IDR ', '').replace(',', '')) * item.quantity
                  ).toFixed(2)}
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleRemove(item.id)} className="remove-btn">
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="cart-total">
          <h4>Total: IDR {total.toFixed(2)}</h4>
          <Button variant="success" className="checkout-btn">
            Proceed to Checkout
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ocean Color. All rights reserved.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Cart;
