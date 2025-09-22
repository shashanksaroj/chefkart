import React from "react";
import { Offcanvas, ListGroup, Button } from "react-bootstrap";

const CartSidebar = ({ show, handleClose, cart, removeFromCart }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup variant="flush">
            {cart.map((item, idx) => (
              <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <div>₹{item.price}</div>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(idx)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;
