import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>
                    <strong>
                        Bienvenido al home
                    </strong>
                </h3>
                <Alert variant='primary'>
                    Ejercicio React <br/>
                    <Alert.Link href="/prueba-react">Haga click</Alert.Link>
                </Alert>
                <Alert variant='warning'>
                    Ejercicio bootstrap 01 <br/>
                    <Alert.Link href="/prueba-bootstrap-01">Haga click</Alert.Link>
                </Alert>
                <Alert variant='warning'>
                    Ejercicio bootstrap 02 <br/>
                    <Alert.Link href="/prueba-bootstrap-02">Haga click</Alert.Link>
                </Alert>
                <Alert variant='warning'>
                    Ejercicio bootstrap 03 <br/>
                    <Alert.Link href="/prueba-bootstrap-03">Haga click</Alert.Link>
                </Alert>
                <Alert variant='danger'>
                    Ejercicio algoritmo 01 <br/>
                    <Alert.Link href="/prueba-algoritmo-01">Haga click</Alert.Link>
                </Alert>
                <Alert variant='danger'>
                    Ejercicio algoritmo 02 <br/>
                    <Alert.Link href="/prueba-algoritmo-02">Haga click</Alert.Link>
                </Alert>
                <br/>
                <p>
                    <strong>Desarrollado por Gonzalo Canaza Cupe</strong>
                </p>
            </div>
        )
    }
}

export default Home;