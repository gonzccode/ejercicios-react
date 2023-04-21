import React, { Component } from "react";

class Counter extends Component {
    state= {
        count: 0
    }

    addCount = () => {
        this.setState( state => {
            let newCount = state.count
            return({
                count: newCount + 1
            })
            
        })
    }

    resetCount = () => {
        this.setState({ 
                count: 0
            })
    }

    render(){
        return(
            <div>
                <h3>
                    <strong>
                        Ejercicio algoritmo 01
                    </strong>
                </h3>
                <div>
                    <h4>
                        Contador es: {this.state.count}
                    </h4>
                    <button className="btn btn-primary" onClick={this.addCount}>Incrementar</button><br/>
                    <button className="btn btn-warning" onClick={this.resetCount}>Reestablecer</button>
                </div>
            </div>
        )
    }
}

export default Counter;