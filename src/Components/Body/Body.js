import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../assets/css/style.module.css"
import data_best_sellers from "../../db/vehicules_best_sellers"
import data_special from "../../db/vehicule_speciaux"

const Body = ({ addToCart }) => {
    return (
        <main>
            <article>
                {/* - #HERO */}
                <section className={`${styles["section"]} ${styles["hero"]}`}  style={{ backgroundImage: 'url("./assets/images/voiture/hero-new-banner.png")' }}>
                    <div className={styles["container"]}>
                        <h2 className={`${styles["h1"]} ${styles["hero-title"]}`}>
                            New Summer <strong>Cars &  Motocycles <br /> Collection</strong>
                        </h2>
                        <p className={styles["hero-text"]}>
                            Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
                            existing an
                            
                            expanded array of leadership.
                        </p>
                        <button className={`${styles["btn"]} ${styles["btn-primary"]}`}>
                            <span>Shop Now</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                        </button>
                    </div>
                </section>
                {/* 
      - #COLLECTION
    */}
                <section className={`${styles["section"]} ${styles["collection"]}`}>
                    <div className={styles["container"]}>
                        <ul className={`${styles["collection-list"]} ${styles["has-scrollbar"]} `}>
                            <li>
                                <div className={styles["collection-card"]} style={{ backgroundImage: 'url("./assets/images/voiture/new_citadine.jpg")' }}>
                                    <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>Citadines</h3>
                                    <NavLink to="#" className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
                                        <span>Explore All</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div className={styles["collection-card"]} style={{ backgroundImage: 'url("./assets/images/voiture/new_sportive.jpg")' }}>
                                    <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>Sportives</h3>
                                    <NavLink to="#" className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
                                        <span>Explore All</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div className={styles["collection-card"]}style={{ backgroundImage: 'url("./assets/images/moto/cruisernobg.jpg")' }}>
                                    <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>Cruiser</h3>
                                    <NavLink to="#" className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
                                        <span>Explore All</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* 
      - #PRODUCT
    */}
                <section className={`${styles["section"]} ${styles["product"]}`}>
                    <div className={styles["container"]}>
                        <h2 className={`${styles["h2"]} ${styles["section-title"]}`}>Bestsellers Products</h2>
                        {/* <ul className={styles[]}"filter-list">
                            <li>
                                <button className={styles[]}"filter-btn  active">All</button>
                            </li>
                            <li>
                                <button className={styles[]}"filter-btn">Nike</button>
                            </li>
                            <li>
                                <button className={styles[]}"filter-btn">Adidas</button>
                            </li>
                            <li>
                                <button className={styles[]}"filter-btn">Puma</button>
                            </li>
                            <li>
                                <button className={styles[]}"filter-btn">Bata</button>
                            </li>
                            <li>
                                <button className={styles[]}"filter-btn">Apex</button>
                            </li>
                        </ul> */}
                        <br />
                        <br />
                        <ul className={styles["product-list"]}>
                        {data_best_sellers.map((car, index) => (
                            <li key={index} className={styles["product-item"]}>
                                <div className={styles["product-card"]} tabIndex={0}>
                                    <figure className={styles["card-banner"]}>
                                        <img src={car.img} width={312} height={350} loading="lazy" alt="Running Sneaker Shoes" className={styles["image-contain"]} />
                                        <div className={styles["card-badge"]}>New</div>
                                        <ul className={styles["card-action-list"]}>
                                            <li className={styles["card-action-item"]}>
                                                <button className={styles["card-action-btn"]} aria-labelledby="card-label-1" onClick={() => addToCart({
                                                    "nom": car.nom,
                                                    "img": car.img,
                                                    "price": car.price,
                                                    "quantite": 1,
                                                })}>
                                                    <ion-icon name="cart-outline" />
                                                </button>
                                                <div className={styles["card-action-tooltip"]} id="card-label-1">Add to Cart</div>
                                            </li>
                                            {/* <li className={styles["card-action-item"]}>
                                                <button className={styles["card-action-btn"]} aria-labelledby="card-label-2">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <div className={styles["card-action-tooltip"]} id="card-label-2">Add to Whishlist</div>
                                            </li> */}
                                            <li className={styles["card-action-item"]}>
                                                <button className={styles["card-action-btn"]} aria-labelledby="card-label-3">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <div className={styles["card-action-tooltip"]} id="card-label-3">Quick View</div>
                                            </li>
                                            {/* <li className={styles["card-action-item"]}>
                                                <button className={styles["card-action-btn"]} aria-labelledby="card-label-4">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <div className={styles["card-action-tooltip"]} id="card-label-4">Compare</div>
                                            </li> */}
                                        </ul>
                                    </figure>
                                    <div className={styles["card-content"]}>
                                        <div className={styles["card-cat"]}>
                                            <NavLink to="#" className={styles["card-cat-link"]}>Classic</NavLink> /
                                            <NavLink to="#" className={styles["card-cat-link"]}>Sports</NavLink>
                                        </div>
                                        <h3 className={`${styles["h3"]} ${styles["card-title"]}`}>
                                            <NavLink to="#">{car.nom}</NavLink>
                                        </h3>
                                        <data className={styles["card-price"]} value="180.85">{car.price}</data>
                                    </div>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </section>
                {/* 
      - #CTA
    */}
                <section className={`${styles["section"]} ${styles["cta"]}`}>
                    <div className={styles["container"]}>
                        <ul className={styles["cta-list"]}>
                            <li>
                                <div className={styles["cta-card"]} style={{ backgroundImage: 'url("./assets/images/voiture/voiturebg.jpg")' }}>
                                    <p className={styles["card-subtitle"]}>Porshes Cars</p>
                                    <h3 className={`${styles["h2"]} ${styles["card-title"]}`}>The Summer Sale Off 50%</h3>
                                    <NavLink to="#" className={`${styles["btn"]} ${styles["btn-link"]}`}>
                                        <span>Shop Now</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div className={styles["cta-card"]} style={{ backgroundImage: 'url("./assets/images/moto/Header-bg.jpg")' }}>
                                    <p className={styles["card-subtitle"]}>Cruiser Motocycles</p>
                                    <h3 className={`${styles["h2"]} ${styles["card-title"]}`}>Makes Yourself Keep Sporty</h3>
                                    <NavLink to="#" className={`${styles["btn"]} ${styles["btn-link"]}`}>
                                        <span>Shop Now</span>
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* 
      - #SPECIAL
    */}
                <section className={`${styles["section"]} ${styles["special"]}`}>
                    <div className={styles["container"]}>
                        <div className={styles["special-banner"]} style={{ backgroundImage: 'url("./assets/images/voiture/special-banner.jpg")' }}>
                            <h2 className={`${styles["h3"]} ${styles["banner-title"]}`}>New Trend Edition</h2>
                            <NavLink to="#" className={`${styles["btn"]} ${styles["btn-link"]}`}>
                                <span>Explore All</span>
                                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                            </NavLink>
                        </div>
                        <div className={styles["special-product"]}>
                            <h2 className={`${styles["h2"]} ${styles["section-title"]}`}>
                                <span className={styles["text"]}>Porshes Special</span>
                                <span className={styles["line"]} />
                            </h2>
                            <ul className={styles["has-scrollbar"]}>
                            {data_special.map((car, index) => (
                                <li key={index} className={styles["product-item"]}>
                                    <div className={styles["product-card"]} tabIndex={0}>
                                        <figure className={styles["card-banner"]}>
                                            <img src={car.img} width={312} height={350} loading="lazy" alt="Running Sneaker Shoes" className={styles["image-contain"]} />
                                            {car.new && <div className={styles["card-badge"]}>New</div>}
                                            {car.reduction && <div className={styles["card-badge"]}>{car.mt_reduction}</div>}
                                            <ul className={styles["card-action-list"]}>
                                                <li className={styles["card-action-item"]}>
                                                    <button className={styles["card-action-btn"]} aria-labelledby="card-label-1" onClick={addToCart}>
                                                        <ion-icon name="cart-outline" />
                                                    </button>
                                                    <div className={styles["card-action-tooltip"]} id="card-label-1">Add to Cart</div>
                                                </li>
                                                <li className={styles["card-action-item"]}>
                                                    <button className={styles["card-action-btn"]} aria-labelledby="card-label-2">
                                                        <ion-icon name="heart-outline" />
                                                    </button>
                                                    <div className={styles["card-action-tooltip"]} id="card-label-2">Add to Whishlist</div>
                                                </li>
                                                <li className={styles["card-action-item"]}>
                                                    <button className={styles["card-action-btn"]} aria-labelledby="card-label-3">
                                                        <ion-icon name="eye-outline" />
                                                    </button>
                                                    <div className={styles["card-action-tooltip"]} id="card-label-3">Quick View</div>
                                                </li>
                                                <li className={styles["card-action-item"]}>
                                                    <button className={styles["card-action-btn"]} aria-labelledby="card-label-4">
                                                        <ion-icon name="repeat-outline" />
                                                    </button>
                                                    <div className={styles["card-action-tooltip"]} id="card-label-4">Compare</div>
                                                </li>
                                            </ul>
                                        </figure>
                                        <div className={styles["card-content"]}>
                                            <div className={styles["card-cat"]}>
                                                <NavLink to="#" className={styles["card-cat-link"]}>Classic</NavLink> /
                                                <NavLink to="#" className={styles["card-cat-link"]}>Sports</NavLink>
                                            </div>
                                            <h3 className={`${styles["h3"]} ${styles["card-title"]}`}>
                                                <NavLink to="#">{car.nom}</NavLink>
                                            </h3>
                                            <data className={styles["card-price"]} value="180.85">{car.price}</data>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </section>
                {/* 
      - #SERVICE
    */}
                <section className={`${styles["section"]} ${styles["service"]}`}>
                    <div className={styles["container"]}>
                        <ul className={styles["service-list"]}>
                            <li className={styles["service-item"]}>
                                <div className={styles["service-card"]}>
                                    <div className={styles["card-icon"]}>
                                        <img src="./assets/images/service-1.png" width={53} height={28} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>Free Shiping</h3>
                                        <p className={styles["card-text"]}>
                                            All orders over <span>$150</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={styles["service-item"]}>
                                <div className={styles["service-card"]}>
                                    <div className={styles["card-icon"]}>
                                        <img src="./assets/images/service-2.png" width={43} height={35} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>Quick PayClassict</h3>
                                        <p className={styles["card-text"]}>
                                            100% secure payClassict
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={styles["service-item"]}>
                                <div className={styles["service-card"]}>
                                    <div className={styles["card-icon"]}>
                                        <img src="./assets/images/service-3.png" width={40} height={40} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>Free Returns</h3>
                                        <p className={styles["card-text"]}>
                                            Money back in 30 days
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={styles["service-item"]}>
                                <div className={styles["service-card"]}>
                                    <div className={styles["card-icon"]}>
                                        <img src="./assets/images/service-4.png" width={40} height={40} loading="lazy" alt="Service icon" />
                                    </div>
                                    <div>
                                        <h3 className={`${styles["h4"]} ${styles["card-title"]}`}>24/7 Support</h3>
                                        <p className={styles["card-text"]}>
                                            Get Quick Support
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* 
      - #INSTA POST
    */}
                <section className={styles["section insta-post"]}>
                    <ul className={`${styles["insta-post-list"]} ${styles["has-scrollbar"]}`}>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/moto/features.jpg" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/moto/gallery-2.jpg" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/voiture/about.png" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/voiture/featured2.png" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/voiture/featured3.png" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/voiture/features.png" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/moto/BMW1.png" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                        <li className={styles["insta-post-item"]}>
                            <img src="./assets/images/moto/gallery-1.jpg" width={100} height={100} loading="lazy" alt="Instagram post" className={`${styles["insta-post-banner"]} ${styles["image-contain"]}`} />
                            <NavLink to="#" className={styles["insta-post-link"]}>
                                <ion-icon name="logo-instagram" />
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </article>
        </main>

    );
};

export default Body;