import React, { Component } from "react";

class Boostrap03 extends Component {

    state = {
        index: 0
    }
    
    changeView = (e) => {
        e.preventDefault()
        const btnClass = e.target.className;
        const myCarouselElement = document.getElementById('myCarousel')
        const carouselItems = myCarouselElement.querySelectorAll('.carousel-item');

        let activeIndex = this.state.index

        if (btnClass === 'carousel-control-prev-icon') {
            carouselItems[activeIndex].classList.remove('active')
            activeIndex = (activeIndex === 0 ) ? carouselItems.length - 1 : activeIndex - 1;
            carouselItems[activeIndex].classList.add('active')
            
        }
        
        if (btnClass === 'carousel-control-next-icon') {
            carouselItems[activeIndex].classList.remove('active')
            activeIndex = (activeIndex === carouselItems.length - 1 ) ? 0 : activeIndex + 1;
            carouselItems[activeIndex].classList.add('active')
        }

        this.setState({
            index: activeIndex
        })
    }

    render() {
        return (
            <div className="ejercicioBootstrap03">
                <h3>
                    <strong>
                        Ejercicio bootstrap 03
                    </strong>
                </h3>
                <div id="myCarousel" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h5>Titulo 01</h5>
                            <img src="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg" className="d-block w-70" alt="imagen-01" height={600}/>
                        </div>
                        <div className="carousel-item">
                            <h5>Titulo 02</h5>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="d-block w-70" alt="imagen-02" height={600}/> 
                        </div>
                        <div className="carousel-item">
                            <h5>Titulo 03</h5>
                            <img src="https://www.elmundodeados.com/wp-content/uploads/2019/02/suiza-en-invierno-4-3.jpg" className="d-block w-70" alt="imagen-03" height={600}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" onClick={this.changeView}  type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" area-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" onClick={this.changeView} type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>           
        )
    }
}

export default Boostrap03;