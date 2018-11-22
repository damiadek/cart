import React, { Component } from "react";
import Products from "./components/products";
import products from "./data/products.js";
import Cart from "./components/cart";
import cartItems from "./data/cart-items.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      cartItems: cartItems,
      cartItemsByProductId: this.getCartItemsByProductId(),
      productsById: this.getProductsById()
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleIncrementCartCount = this.handleIncrementCartCount.bind(this);
    this.handleDecrementCartCount = this.handleDecrementCartCount.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  performCartActions(product_id, action) {
    let { productsById } = this.state;
    let { cartItemsByProductId } = this.state;
    let product = action(productsById[product_id]);
    let cartItem = cartItemsByProductId[product_id] || {
      id: this.state.cartItems.length,
      product_id: product.id,
      count: 0
    };

    productsById[[product.id]] = product;
    cartItem["count"] = product.cart_count;
    cartItemsByProductId[cartItem.product_id] = cartItem;

    if (cartItem["count"] === 0) {
      delete cartItemsByProductId[cartItem.product_id];
    }

    let newState = {
      products: this.objectToArray(productsById),
      productsById: productsById,
      cartItems: this.objectToArray(cartItemsByProductId),
      cartItemsByProductId: cartItemsByProductId
    };

    for (const key in newState) {
      if (newState.hasOwnProperty(key)) {
        localStorage.setItem(key, newState[key]);
      }
    }

    this.setState(newState);
  }

  objectToArray(object) {
    let array = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        array.push(element);
      }
    }
    return array;
  }

  addToCart(product) {
    if (product.quantity > 0) {
      product.cart_count = 1;
      product.quantity -= 1;
    }
    if (product.quantity === 0) {
      product.in_stock = false;
    }
    return product;
  }

  handleAddToCart(product_id) {
    this.performCartActions(product_id, this.addToCart);
  }

  incrementCartCount(product) {
    if (product.quantity > 0) {
      product.cart_count += 1;
      product.quantity -= 1;
    }
    if (product.quantity === 0) {
      product.in_stock = false;
    }
    return product;
  }

  handleIncrementCartCount(product_id) {
    this.performCartActions(product_id, this.incrementCartCount);
  }

  decrementCartCount(product) {
    product.cart_count > 0
      ? (product.cart_count -= 1)
      : (product.cart_count = 0);

    product.quantity += 1;

    if (product.quantity > 0) {
      product.in_stock = true;
    }
    return product;
  }

  handleDecrementCartCount(product_id) {
    this.performCartActions(product_id, this.decrementCartCount);
  }

  removeFromCart(product) {
    product.quantity += product.cart_count;
    product.cart_count = 0;
    if (product.quantity > 0) {
      product.in_stock = true;
    }
    return product;
  }

  handleDeleteFromCart(product_id) {
    this.performCartActions(product_id, this.removeFromCart);
  }

  getProductsById() {
    let productsById = {};
    let cartItemsByProductId = this.getCartItemsByProductId();

    products.forEach(product => {
      let cartItem = cartItemsByProductId[product.id];
      product.cart_count = cartItem ? cartItem.count : 0;
      productsById[product.id] = product;
    });

    return productsById;
  }

  getCartItemsByProductId() {
    let cartItemsByProductId = {};

    cartItems.forEach(item => {
      cartItemsByProductId[item.product_id] = item;
    });

    return cartItemsByProductId;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 col-md-4">
            <h2 className="mt-5 mb-2">
              Products
              {this.state.products.length > 0 && (
                <small>
                  ({this.state.products.length} item
                  {this.state.products.length > 1 && "s"})
                </small>
              )}
            </h2>
            <Products
              products={this.state.products}
              cartItems={this.state.cartItemsByProductId}
              handleAddToCart={this.handleAddToCart}
              handleDeleteFromCart={this.handleDeleteFromCart}
              handleDecrementCartCount={this.handleDecrementCartCount}
              handleIncrementCartCount={this.handleIncrementCartCount}
            />
            <h2 className="mt-5 mb-2">
              Cart
              {this.state.cartItems.length > 0 && (
                <small>
                  ({this.state.cartItems.length} item
                  {this.state.cartItems.length > 1 && "s"})
                </small>
              )}
            </h2>
            <Cart
              cartItems={this.state.cartItems}
              products={this.state.productsById}
              handleDeleteFromCart={this.handleDeleteFromCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
