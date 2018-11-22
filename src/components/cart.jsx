import React, { Component } from "react";
import CartItem from "./cart-item";

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  handleDeleteFromCart(product_id) {
    this.props.handleDeleteFromCart(product_id);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.cartItems.length === 0 && (
          <h6 className="text-danger">
            No items in cart yet. Add something from the product list above to
            get started
          </h6>
        )}
        {this.props.cartItems.map(item => (
          <div className="row" key={item.id}>
            <CartItem
              cartItem={item}
              product={this.props.products[item.product_id]}
              handleDeleteFromCart={this.handleDeleteFromCart}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default CartItems;
