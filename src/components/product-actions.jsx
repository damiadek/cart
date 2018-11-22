import React, { Component } from "react";

class ProductActions extends Component {
  handleChange() {}

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
    let product = this.props.product;
    return (
      <div className="bg-dark p-2 text-white">
        {product.cart_count === 0 && (
          <button
            className="btn btn-sm btn-default"
            disabled={!product.in_stock}
            onClick={() => this.handleAddToCart(product.id)}
          >
            add to cart
          </button>
        )}
        {product.cart_count > 0 && (
          <React.Fragment>
            <span className="clearfix">
              <button
                className="btn btn-sm btn-default mx-2"
                onClick={() => this.handleDecrementCartCount(product.id)}
              >
                -
              </button>
              <span className="font-weight-bold">{product.cart_count}</span>
              <button
                className="btn btn-sm btn-default mx-2"
                onClick={() => this.handleIncrementCartCount(product.id)}
              >
                +
              </button>
            </span>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ProductActions;
