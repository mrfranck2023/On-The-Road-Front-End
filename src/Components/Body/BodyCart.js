import React, { useState } from 'react';
import "../assets/css/cart.css"
import { NavLink } from 'react-router-dom';


const BodyCart = ({ cart, removeItemFromCart, increaseQuantity, decreaseQuantity }) => {
  // Fonction pour calculer le prix total du panier
  const total = cart.reduce((accumulateur, article) => {
    return accumulateur + article.price * article.quantite;
  }, 0);

    return (
		<div className="untree_co-section before-footer-section">           <div className="body"></div>
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                      {cart.map((car, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <img src={car.img} alt="Image" className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{car.nom}</h2>
                          </td>
                          <td>{car.price}</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: 120}}>
                              <div className="input-group-prepend">
                                <button className="btnn btn-outline-black decrease" type="button" onClick = {() => decreaseQuantity(index)}>&minus;</button>
                              </div>
                              <input type="text" className="form-control text-center quantity-amount" value={car.quantite} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                              <div className="input-group-append">
                                <button className="btnn btn-outline-black increase" type="button" onClick = {() => increaseQuantity(index)}>+</button>
                              </div>
                            </div>
                              
                          </td>
                          <td>{car.price * car.quantite}</td>
                          <td><a href="#" className="btnn btn-black btn-sm" onClick={() => removeItemFromCart(index)}>X</a></td>
                        </tr>
                      ))}

                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
        
              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    {/* <div className="col-md-6 mb-3 mb-md-0">
                      <button className="btnn btn-black btn-sm btn-block">Update Cart</button>
                    </div> */}
                    <div className="col-md-6">
                      <NavLink to="/shop" >
                        <button className="btnn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="text-black h4" htmlFor="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div className="col-md-4">
                      <button className="btnn btn-black">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      {/* <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">Subtotal</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">$230.00</strong>
                        </div>
                      </div> */}
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">{total}</strong>
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">
                          <button className="btnn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="body"></div>
          </div>

    );
};

export default BodyCart;