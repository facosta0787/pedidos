import React, { Component } from 'react';
import Router from 'next/router';
import { Card, Button, Row, Col, Icon } from 'react-materialize';
import LazyLoad from 'react-lazy-load';

class ClienteMaterialize extends Component{

    handleClick = event =>{

             Router.push({
             pathname: '/pedidos',
             query: { codigo: this.props.NitCliente,
             suc: this.props.Sucursal,
             }
             });

    };
    render(){
        return(
            <div>
                <Row>
                    <Col m={12} s={12}>

                        <Card className='grey lighten-5'
                              textClassName='grey-text text-darken-2'
                              title={this.props.RazonSocial.replace(/\b\w/g, l => l.toUpperCase())}
                              actions={[<Button
                                  className='blue darken-4'
                                  waves='light'
                                  onClick={this.handleClick}>Pedidos</Button>]}>
                            Nit: {this.props.NitCliente} Suc: {this.props.Sucursal}<br />
                            Direccion: {this.props.Direccion}
                        </Card>

                    </Col>
                </Row>
            </div>
        );
    }
}
export default ClienteMaterialize;
