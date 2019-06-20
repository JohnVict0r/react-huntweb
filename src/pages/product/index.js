import React, { Component } from "react";
import api from "../../services/api";

import ProductComponent from "../../components/Product";

class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return <ProductComponent product={product} />;
  }
}

export default Product;

