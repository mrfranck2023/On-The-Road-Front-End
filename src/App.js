// import React, { Component, useState } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Dashboard from './Pages/Dashboard/Dashboard';
// import FormPropVehiculesDashboard from './Pages/Dashboard/FormPropVehiculesDashboard';
// import Cart from './Pages/Cart';

// class App extends Component {
//   render() {
  
//     return (
//       <BrowserRouter> 
//       <Routes>
//           {/* <Route path='/' element={<Login/>}></Route> */}
//           {/* <Route path='/register' element={<Login/>}></Route> */}
//           <Route path='/' element={<Home />}></Route>
//           <Route path='/dashboard' element={<Dashboard/>}></Route>
//           <Route path='/form-prop-vehicules' element={<FormPropVehiculesDashboard/>}></Route>
//           <Route path='/cart' element={<Cart/>}></Route>
//       </Routes>
//   </BrowserRouter>
//     );
//   }
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import FormPropVehiculesDashboard from './Pages/Dashboard/FormPropVehiculesDashboard';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop/Shop';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // setCart([...cart, product]);
    setCart((prevCart) => {
      // Vérifier si le produit est déjà dans le panier
      const existingProductIndex = prevCart.findIndex((item) => item.nom === product.nom);
  
      if (existingProductIndex !== -1) {
        // Si le produit existe déjà, créer une nouvelle copie du panier
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingProductIndex) { //de part la verfication faite par le strictmode de react, les fonction qui modifie l'etat son souvent appelée deux fois c'est pourquoi nous ajoutons cette conditionde test pour eviter que lorsque notre fonction est appelee une deuxieme fois, l'element que nous avons modifie au prealable ne le soit plus 
            // Augmenter la quantité du produit existant
            return { ...item, quantite: item.quantite + product.quantite };
          }
          return item;
        });
        return updatedCart;
      } else {
        // Si le produit n'existe pas, l'ajouter au panier
        return [...prevCart, product];
      }
    });
  };


  const removeItemFromCart = (id) => {
    setCart([...cart.slice(0, id), ...cart.slice(id + 1)]);  // Filtrer l'élément à retirer en fonction de l'id
  };

  const increaseQuantity = (id) => {
    setCart(cart.map((article, index) => 
      index === id ? { ...article, quantite:  article.quantite + 1} : article
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map((article, index) => 
        index === id && article.quantite > 1 ? { ...article, quantite:  article.quantite - 1} : article
    ));
    };
  const total = cart.reduce((accumulateur, article) => {
    return accumulateur + article.quantite;
  }, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} cartCount={total} />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/form-prop-vehicules' element={<FormPropVehiculesDashboard />}></Route>
        <Route path='/cart' element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} cartCount={total}/>}></Route>
        <Route path='/shop' element={<Shop cartCount={total}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
