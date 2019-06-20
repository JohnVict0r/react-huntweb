import React, { Component } from "react";
import { Link } from "react-router-dom";

class Article extends Component {
  render() {
    const { product } = this.props;

    return (
      <article key={product._id}>
        <strong>{product.title}</strong>
        <p>{product.description}</p>

        <Link to={`/products/${product._id}`}>Acessar</Link>
      </article>
    );
  }
}

export default Article;
