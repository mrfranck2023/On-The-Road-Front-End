import React,  { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Body from '../Components/Body/Body';

const Home = ({ addToCart, cartCount }) => {

// const [cartCount, setCartCount] = useState(0);

    return (
      <div>
        <Header cartCount={cartCount} estVisible={false}/>
        <Body addToCart={addToCart} />
        <Footer />
      </div>
    );
};


export default Home;