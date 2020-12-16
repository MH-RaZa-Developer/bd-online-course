import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {

    return (
        <div>
            <div className="container">
                <div className="card">
                    <img src={props.course.img}></img>
                    <h6><strong>Course Name:</strong> {props.course.name}</h6>
                    <h5>Price: {props.course.price} Taka</h5>
                    <button onClick={() => props.handleClick(props.course)} type="button" className="btn btn-primary btn-lg"><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;