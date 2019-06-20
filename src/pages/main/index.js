import React, { Component } from "react";
import api from "../../services/api";

import Article from "../../components/Article";
import Footer from "../../components/Footer";

import "./styles.css";

export default class Main extends Component {
  //State é sempre um objeto
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  //Executa assim que o componente é exibido em tela
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    // response.data.docs fica em docs, e o restante da info do objeto fica em productInfo
    // esse é o sentido do ...productInfo
    const { docs, ...productInfo } = response.data;
    //Altera o State definido. Nesse caso, products do State recebe o array de response.data.docs e o
    //restante da info fica em productInfo
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    //Se chegar a ultima pagina, retorna nada, visto que nao tem proxima pagina
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  //O método render escuta alterações na variável state "ao vivo"
  //Mudou o State, render executa novamente
  //{} sempre é codigo. this.state.products.map percorre o array products.
  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <Article product={product} />
        ))}
        <Footer productInfo={productInfo} page={page} prevPage={this.prevPage} nextPage={this.nextPage} />
      </div>
    );
  }
}
