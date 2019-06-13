import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component{
    
    //State é sempre um objeto
    state = {
        products: [],
    }

    //Executa assim que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        
        //Altera o State definido. Nesse caso, products do State recebe o array de docs
        this.setState({ 
           products: response.data.docs 
        })
    };

    //O método render escuta alterações na variável state "ao vivo"
    //Mudou o State, render executa novamente
    //{} sempre é codigo. this.state.products.map percorre o array products.
    render(){
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    }
}