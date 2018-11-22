import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleIncrementCartCount = this.handleIncrementCartCount.bind(this);
    this.handleDecrementCartCount = this.handleDecrementCartCount.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  handleAddToCart(product_id) {
    this.props.handleAddToCart(product_id);
  }

  handleIncrementCartCount(product_id) {
    this.props.handleIncrementCartCount(product_id);
  }

  handleDecrementCartCount(product_id) {
    this.props.handleDecrementCartCount(product_id);
  }

  handleDeleteFromCart(product_id) {
    this.props.handleDeleteFromCart(product_id);
  }

  render() {
    return (
      <div className="row">
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={this.handleAddToCart}
            handleDeleteFromCart={this.handleDeleteFromCart}
            handleDecrementCartCount={this.handleDecrementCartCount}
            handleIncrementCartCount={this.handleIncrementCartCount}
          />
        ))}
      </div>
    );
  }
}

export default Products;
