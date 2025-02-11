import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../assets/css/style.module.css"


const Header = ({ cartCount , handleInputChange, estVisible }) => {
    return (
        <div className={styles["Header"]}>
            <header className={`${styles["header"]} ${styles["data-header"]}`}>
                <div className={styles["container"]}>

                    <div className={`${styles["overlay"]} ${styles["data-overlay"]}`}> </div>

                    <NavLink to="/" className={styles["logo"]}>
                        {/* <img src="./assets/images/logo.svg" width={160} height={50} alt="Footcap logo" /> */}
                        <p className={styles["logo-carshop"]}>OnTheRoad</p>
                    </NavLink>

                    <button className={`${styles["nav-open-btn"]} ${styles["data-nav-open-btn"]}`} aria-label="Open Menu">
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <nav className={styles["navbar"]} data-navbar>

                        <button className={`${styles["nav-close-btn"]} ${styles["data-nav-close-btn"]}`}aria-label="Close Menu">
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                        <NavLink to="/" className={styles["logo"]}>
                            <img src="./assets/images/logo.svg" width={190} height={50} alt="Footcap logo" />
                        </NavLink>

                        <ul className={styles["navbar-list"]}>

                            <li className={styles["navbar-item"]}>
                                <NavLink to="#" className={styles["navbar-link"]}>Home</NavLink>
                            </li>

  
                            
                            <li className={styles["navbar-item"]}>
                                <NavLink to="/shop" className={styles["navbar-link"]}>Shop</NavLink>
                            </li>

     
                            <li className={styles["navbar-item"]}>
                                <NavLink to="/" className={styles["navbar-link"]}>Contact</NavLink>
                            </li>
                            {estVisible ? (
                            <li className={styles["navbar-item"]}>

                                <div className='nav-container'>
                                    <input type="text" className='search-input' placeholder='Chercher un véhicule' onChange={handleInputChange}/>
                                </div>
                            </li>
                            ) : ( <li> <div> </div> </li>)}

                        </ul>

                        <ul className={styles["nav-action-list"]}>

                            <li>
                                <button className={styles["nav-action-btn"]}>
                                    <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                                    <span className={styles["nav-action-text"]}>Search</span>
                                </button>
                            </li>

                            <li>
                                <NavLink to="/dashboard" className={styles["nav-action-btn"]}>
                                    <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                                    <span className={styles["nav-action-text"]}>Login / Register</span>
                                </NavLink>
                            </li>

                            <li>
                                <button className={styles["nav-action-btn"]}>
                                    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                                    <span className={styles["nav-action-text"]}>Wishlist</span>

                                    <data className={styles["nav-action-badge"]} value="5" aria-hidden="true">5</data>
                                </button>
                            </li>

                            <li>
                                
                                <NavLink to="/cart" className={styles["nav-action-btn"]}>
                                    <button>
                                        <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                                
                                        <data className={styles["nav-action-text"]} value="318.00">Basket: <strong>$318.00</strong></data>
                                
                                        <data className={styles["nav-action-badge"]} value="4" aria-hidden="true">{ cartCount }</data>
                                    </button>
                                </NavLink>
                            </li>

                        </ul>

                    </nav>

                </div>
            </header>
            <div className={styles["body"]}></div>
        </div>
    );
};

export default Header;