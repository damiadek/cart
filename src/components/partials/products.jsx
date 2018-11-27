import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    const { products, onAdd, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="row">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onAdd={onAdd}
            onDelete={onDelete}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
