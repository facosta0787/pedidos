import React, { Component } from 'react';
import Router from 'next/router';

class Pedidos extends Component{

    handleClick= event =>{
        Router.push('/');
    };

    static async getInitialProps({query}){
        let url = `http://vmr.tarrao.co/pedidos/getPedidosCliente/${query.codigo}`;
        if(query.suc != ""){url = url + "/" + query.suc;}
        const response = await fetch(url);
        const json = {pedidos: await response.json()};
        return json;
    }

    render(){
        console.log(this.props.pedidos);
        if(typeof this.props.pedidos === "undefined" || this.props.pedidos.length == 0) {
            return (
                <div>
                    <h4>Cliente sin pedidos</h4>
                    <button onClick={this.handleClick} >Volver</button>
                </div>
            );
        }
        else{
            return(

                <div>
                    <button onClick={this.handleClick} > Volver </button>
                    {this.props.pedidos.map(
                        pedido => {
                            return(
                                <div>
                                    <p>Fecha: {pedido.fecha}</p>
                                    <p>Numero: {pedido.numero}</p>
                                    <p>Unidades: {pedido.totUnidades}</p>
                                    <p>Total: {pedido.vlrTotalVenta}</p>
                                    <hr width="100%"/>
                                </div>
                            );
                        }
                    )}
                </div>

            );
        }

    }
}
export default Pedidos;