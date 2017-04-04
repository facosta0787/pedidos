import React from 'react';
import Document, {
  Main,
  NextScript,
  Head,
} from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

class PedidosClientes extends Document {
    render() {
    return (
      <html>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css"
                rel="stylesheet" />
            <link
                href="https://fonts.googleapis.com/css?family=Roboto"
                rel="stylesheet" />

            <title>Pedidos</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default PedidosClientes;
