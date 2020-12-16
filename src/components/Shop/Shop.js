import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Shop = () =>{
    //console.log(fakeData);
    const sixCard = fakeData.slice(0, 6);
    const [course, setCourse] = useState(sixCard);

    const [cart, setCart] = useState([]);

    const handleClick = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <Cart cart={cart} />
            <h2 className="text-dark text-center mt-3">BD Online Course</h2>
            <div className="product-container">
                {
                    course.map(cs => <Card key={cs.key} handleClick={handleClick} course={cs}></Card>)
                }
            </div>
        </div>
    )
}

export default Shop;