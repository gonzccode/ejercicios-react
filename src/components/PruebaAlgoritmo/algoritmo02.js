import React, { Component } from "react";
import Results from "./results";

class Search extends Component {

    state= {
        search: '',
        results: []
    }

    submitForm = (e) => {
        e.preventDefault();
        //en input no controlados seria con
        //let name = e.target.name.value

        let name = this.state.search

        //extrayendo datos de la api segun el nombre
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`)
            .then(response => response.json())
            .then(data => 
                this.setState({
                    results: [...data.results]
                }))
    }

    //utilizando input controlados
    changeInput = (e) => {
        this.setState({
            search: e.target.value.toLowerCase()
        })

    }

    render(){
        return(
            <div className="searchInput">
                <h3>
                    <strong>
                        Ejercicio algoritmo 02
                    </strong>
                </h3>
                <p>
                    <strong>
                        API RICK Y MORTY
                    </strong>
                </p>
                <div className="formInput">
                    <form onSubmit={this.submitForm}>
                        <input type="text" className="form-control" id="name" value={this.state.search} onChange={this.changeInput} placeholder="Ingrese personaje"/>
                        <p style={{color: 'red'}}>Busca personajes de la serie: rick, morty, summer, jerry, etc</p>
                        <button className="btn btn-success" type="submit">Buscar</button> 
                    </form>
                </div>
                <div>
                    <p>
                       Resultado de: {this.state.search}
                    </p>
                </div>
                <div>
                    {
                        this.state.results.length !== 0 ? 
                        <Results results={this.state.results}/>
                        :
                        <p>No hay resultados</p>
                    }
                </div>
                
            </div>
        )
    }
}
    
export default Search;