import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart, darkMode }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        className={`m-2 shadow-sm ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"}`}
        style={{ width: "18rem", borderRadius: "12px" }}
      >
        <Card.Img
          variant="top"
          src={product.img}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="small">{product.description}</Card.Text>
          <Card.Text>
            <strong>₹{product.price}</strong>
          </Card.Text>
          <Button
            variant={darkMode ? "light" : "primary"}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
