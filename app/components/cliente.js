import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import Card from '../material_components/card';

class ClienteComponent extends Component {

  handleClick = event =>{
    alert(`Oh que Click! ${this.props.RazonSocial}`);
  }

  render(){
    return(
        <Card />
    );
  }
}
export default ClienteComponent;

const ItemList = styled.li` font-family: 'Roboto', sans-serif;
margin-bottom:5px;
list-style: none;
padding-top: 10px;
padding-bottom: 10px;
border-bottom: 1px solid lightgray;
text-transform: capitalize;
border-radius: 15px;
&:hover{
  background: #E0E0E0;
}
`
/*
 <div>
 <ItemList onClick={this.handleClick}>
 <Row>
 <Col xs>{this.props.RazonSocial}</Col>
 <Col xs>Nit: {this.props.NitCliente}</Col>
 <Col xs>Direccion: {this.props.Direccion}</Col>
 </Row>
 </ItemList>
 </div>
*/