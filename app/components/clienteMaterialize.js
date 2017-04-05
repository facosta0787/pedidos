import React, { Component } from 'react';
import { Card, Button, Row, Col, Icon } from 'react-materialize';

class ClienteMaterialize extends Component{

    handleClick = event =>{
        alert(`Oh que Click! ${this.props.RazonSocial}`);
    }

    render(){
        return(
            <Row>
                <Col m={12} s={12}>
                    <Card className='grey lighten-5'
                          textClassName='grey-text text-darken-2'
                          title={this.props.RazonSocial.replace(/\b\w/g, l => l.toUpperCase())}
                          actions={[<Button
                                        className='blue darken-4'
                                        waves='light'
                                        onClick={this.handleClick}>Pedidos</Button>]}>
                        Nit: {this.props.NitCliente}<br />
                        Direccion: {this.props.Direccion}
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default ClienteMaterialize;

