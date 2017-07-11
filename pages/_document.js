import React from 'react';
import Document, {
  Main,
  NextScript,
  Head,
} from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

class PedidosClientes extends Document {

    static async getInitialProps({ renderPage }) {
        const page = renderPage();
        const styles = (
            <style
                dangerouslySetInnerHTML={{
                    __html: styleSheet
                        .rules()
                        .map(rule => rule.cssText)
                        .join('\n')
                }}
            />
        );
        return { ...page, styles };
    }

    render() {
    return (
      <html>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet" />

            <link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
            <title>Pedidos</title>
        </Head>
        <body>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default PedidosClientes;

/*<!-- <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" /> --> */