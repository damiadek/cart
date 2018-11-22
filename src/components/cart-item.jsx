import React, { Component } from "react";

class CartItem extends Component {
  handleDeleteFromCart(product_id) {
    this.props.handleDeleteFromCart(product_id);
  }

  render() {
    const cartItem = this.props.cartItem;
    const product = this.props.product;

    return (
      <React.Fragment>
        {cartItem.count > 0 && (
          <div className="col-12 alert alert-success" key={cartItem.id}>
            <b>{product.name}</b> - <b>{cartItem.count}</b> item
            {cartItem.count > 1 && "s"} in cart
            <button
              className="btn btn-sm btn-danger float-right"
              onClick={() => this.handleDeleteFromCart(product.id)}
            >
              remove <i className="fa fa-trash" />
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CartItem;
