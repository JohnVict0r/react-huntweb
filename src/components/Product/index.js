import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Product extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>

        <Link to={"/"}>Voltar</Link>
      </div>
    );
  }
}

export default Product;
