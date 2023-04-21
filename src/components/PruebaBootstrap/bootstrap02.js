import React, { Component } from "react";

class Boostrap02 extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><strong>Mi sitio web</strong></a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/prueba-react">React</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/prueba-bootstrap-01">Boostrap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/prueba-bootstrap-01">Algoritmo</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </div>
                </div>
            </nav>
            <br/>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">
                        Encabezado con jumbotron
                    </h1>
                    <p className="lead">
                        Gonzalo canaza cupe
                    </p>
                </div>
            </div>
            </>
        )
    }
}

export default Boostrap02;