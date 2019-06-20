import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { page, productInfo, prevPage, nextPage } = this.props;

    return (
      <div className="actions">
        <button disabled={page === 1} onClick={() => prevPage()}>
          Anterior
        </button>
        <button disabled={page === productInfo.pages} onClick={() => nextPage()}>
          Próxima
        </button>
      </div>
    );
  }
}

export default Footer;
