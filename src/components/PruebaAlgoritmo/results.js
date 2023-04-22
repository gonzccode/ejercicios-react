import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Results extends Component {

    render(){
        return(
            <div className="resultsApi">
                {
                    this.props.results.map((item, index) => 
                        <Card style={{ width: '18rem', margin: '5px' }} key={index}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Especie: {item.species} 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                }
            </div>
        )
}
}

export default Results;