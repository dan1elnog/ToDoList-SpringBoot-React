import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
    <div id="carouselExampleCaptions" className="carousel slide w-50 container mt-3" data-bs-ride="carousel">
        <h1 className="text-center mb-5" >Bem vindo</h1>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://media.semprefamilia.com.br/semprefamilia/2019/09/como-fazer-amigos-vida-adulta-620x349-6126ef28.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZjpp9i2sGOPiP7kH4Qffcd4KnfArV6Vgcw&usqp=CAU" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://s2.glbimg.com/gR7AqZNmjOBbdN79GNK6OAPzX2c=/940x523/e.glbimg.com/og/ed/f/original/2019/04/18/rotina.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>      
    )
  }
}
