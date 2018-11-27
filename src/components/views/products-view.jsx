import React, { Component } from "react";
import Products from "../partials/products";
import Cart from "../partials/cart";

class ProductsView extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7">
            <div className="bg-light text-danger display-1 text-center my-3 font-weight-bold shadow-sm">
              50% Discount
            </div>
            <h2 className="mt-5 mb-2">
              Products
              {this.props.products.length > 0 && (
                <small>
                  ({this.props.products.length} item
                  {this.props.products.length > 1 && "s"})
                </small>
              )}
            </h2>
            <Products
              products={this.props.products}
              onAdd={this.props.onAdd}
              onDelete={this.props.onDelete}
              onDecrement={this.props.onDecrement}
              onIncrement={this.props.onIncrement}
            />
            <h2 className="mt-5 mb-2">
              Cart
              {this.props.cartItems.length > 0 && (
                <React.Fragment>
                  <small>
                    ({this.props.cartItems.length} item
                    {this.props.cartItems.length > 1 && "s"})
                  </small>
                  <small className="float-right">
                    Total: <b>${this.props.cartSummary.total_price}</b>
                  </small>
                </React.Fragment>
              )}
            </h2>
            <Cart
              cartItems={this.props.cartItems}
              products={this.props.productsById}
              onDelete={this.props.onDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsView;
