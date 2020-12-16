import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {

    const cart = props.cart;

    let total = 0;
    for(let i=0; i<cart.length; i++){
        const course = cart[i];
        total = total + parseInt(course.price);
    }

    return (
        <div>
            <div className="cart text-center">
                    <h2><FontAwesomeIcon icon={faShoppingCart} /> <span>{cart.length}</span></h2>
                    <h3>Total Price: {total} Taka</h3>
                    <button type="button" className="btn btn-lg btn-danger w-50">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;