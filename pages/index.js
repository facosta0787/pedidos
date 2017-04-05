import React, { Component } from 'react';
import fetch from  'isomorphic-fetch';
import styled from 'styled-components';
import ClienteMaterial from '../app/components/cliente';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {data:[],loading:true};
    }

    static async getInitialProps(){
        const URL = `http://vmr.tarrao.co/data/syncclientes/05  `;
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }

    async componentDidMount(){
        /*
        const URL = `http://vmr.tarrao.co/data/syncclientes/05  `;
        const response = await fetch(URL);
        const data = await response.json();
        this.setState({data:data});
        this.setState({loading:false});
        */
        return null;
    }

    render(){
        if(this.props.Clientes.length == 0){
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
                    <UlList>{this.props.Clientes.map(
                        cliente => {
                            return(
                                <ClienteMaterial {...cliente}/>
                            );
                        }
                    )}</UlList>
                </div>
            );
        }
    }


}
export default Home;

const Titulo = styled.h3`
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
margin: 0px 20px 0px 20px;
`