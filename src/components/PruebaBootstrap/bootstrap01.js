import React, { Component } from "react";

class Boostrap01 extends Component {
    render() {
        return(
            <div className="ejercicioBootstrap01">
                <h3>
                    <strong>
                        Ejercicio bootstrap 01
                    </strong>
                </h3>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-4 column">
                            <h5>
                                <p>Esto es una columna 1</p>
                            </h5>
                        </div>
                        <div className="col-sm-4 column">
                            <h5>
                                <p>Esto es una columna 2</p>
                            </h5>
                        </div>
                        <div className="col-sm-4 column">
                            <h5>
                                <p>Esto es una columna 3</p>
                            </h5>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Boostrap01;