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
                    Prueba React <br/>
                    <Alert.Link href="/prueba-react">Haga click</Alert.Link>
                </Alert>
                    <Alert variant='danger'>
                        Prueba React <br/>
                    <Alert.Link href="/prueba-react">Haga click</Alert.Link>
                </Alert>
            </div>
        )
    }
}

export default Home;