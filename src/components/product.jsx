import React, { Component } from "react";
import ProductActions from "./product-actions";

class Product extends Component {
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
    const product = this.props.product;

    return (
      <div
        className="col-12 col-md-4 py-5 bg-light text-center"
        key={product.id}
      >
        <img
          className="img img-thumbnail"
          src={product.image_url}
          alt={product.name}
        />
        <br />
        <a href={"products/" + product.id}>{product.name}</a>
        <br />
        <b>${product.price} per item</b>
        <br />
        <span className={product.in_stock ? "text-success" : "text-danger"}>
          {product.in_stock
            ? product.quantity +
              " item" +
              (product.quantity > 1 ? "s" : "") +
              " left"
            : "out of stock"}
        </span>
        <br />
        <ProductActions
          product={product}
          handleAddToCart={this.handleAddToCart}
          handleDeleteFromCart={this.handleDeleteFromCart}
          handleDecrementCartCount={this.handleDecrementCartCount}
          handleIncrementCartCount={this.handleIncrementCartCount}
        />
      </div>
    );
  }
}

export default Product;
