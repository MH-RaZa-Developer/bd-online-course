import React from 'react';
import image from '../../img/BD.png';
import slide1 from '../../img/first.jpg';
import slide2 from '../../img/second.jpg';
import slide3 from '../../img/third.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="logo-area col-sm-4">
                    <img src={image}></img>
                </div>
                <div className="nav-menu col-sm-4">
                    <a href="/Home">Home</a>
                    <a href="/Categories">Categories</a>
                    <a href="/About">About Us</a>
                    <a href="/Contact">Contact</a>
                </div>
                <div className="search-box col-sm-4">
                    <input type="text" className="form-control w-50" placeholder="Search for anything..."></input>
                    <button type="button" className="btn btn-primary">Search</button>
                </div>
            </div>

            <div id="carouselExampleControls" class="carousel slide mt-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img style={{height:"500px"}} src={slide1} class="d-block w-100" alt="" />
                </div>
                <div class="carousel-item">
                <img style={{height:"500px"}} src={slide2} class="d-block w-100" alt="" />
                </div>
                <div class="carousel-item">
                <img style={{height:"500px"}} src={slide3} class="d-block w-100" alt="" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
            </div>
        </div> 
    );
};

export default Header;