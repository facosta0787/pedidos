import React, { Component } from 'react';
import fetch from  'isomorphic-fetch';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Client from '../app/components/cliente';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {data:[]}
    }

    static async getInitialProps(){
        return {};
    }


    async componentDidMount(){
        const URL = `http://vmr.tarrao.co/data/syncclientes/03`;
        const response = await fetch(URL);
        const data = await response.json();
        this.setState({data:data});
    }

    render(){

        if(this.state.data == 0){
            return(
                <div>
                    <Titulo>Pedidos - React.JS</Titulo>
                    <Spinner><img src="../static/spinner.gif"/></Spinner>

                </div>
            );
        }else{
            return(

                <div>
                    <Titulo>Pedidos - React.JS</Titulo>
                    <UlList>{this.state.data.Clientes.map(
                        cliente => {
                            return(
                                <Client {...cliente}/>
                            );
                        }
                    )}</UlList>
                </div>
            );
        }
    }


}
export default Home;

/*
<ItemList>
{cliente.RazonSocial} | Nit: <span><strong>{cliente.NitCliente}  {cliente.Sucursal}</strong></span>
</ItemList>
*/

const Titulo = styled.h1`
font-family: 'Roboto', sans-serif;
text-align: center;
margin:auto;
`
const Spinner = styled.figure`
margin: 0;
padding: 0;
text-align: center;
margin: 10px auto;
img{
    width: 64px;
    height: 64px;
}
`
const UlList = styled.ul`
padding: 0px;
margin: 0px 25px 0px 25px;
`
