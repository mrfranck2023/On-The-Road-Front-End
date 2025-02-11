import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import BodyCart from '../Components/Body/BodyCart';

const Cart = ({ cart, removeItemFromCart, increaseQuantity, decreaseQuantity, cartCount }) => {


    return (
        <div>
        <Header cartCount={cartCount} estVisible={false}/>
        <BodyCart cart={cart} removeItemFromCart={removeItemFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
        <Footer />
        </div>
    );
};

export default Cart;
