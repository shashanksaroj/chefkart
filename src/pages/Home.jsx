import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Row, Col, Container, Button } from "react-bootstrap";

const Home = ({ addToCart, darkMode }) => {
  return (
    <Container className="mt-4">
      {/* Hero Section */}
      <div
        className={`p-5 mb-4 rounded-3 text-center ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <h1>Welcome to ChefKart 🍕</h1>
        <p className="lead">Delicious food, delivered fresh to your door.</p>
        <Button variant={darkMode ? "light" : "primary"} size="lg">
          Order Now
        </Button>
      </div>

      <h2 className={darkMode ? "text-light" : "text-dark"}>Our Menu</h2>
      <Row>
        {products.map((p) => (
          <Col key={p.id} sm={12} md={6} lg={4}>
            <ProductCard product={p} addToCart={addToCart} darkMode={darkMode} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
