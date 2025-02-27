import React, {useState} from 'react';
import styles from "../../../../Components/assets/css/style.module.css"
import data_best_sellers from '../../../../db/vehicules_best_sellers';
import { NavLink } from 'react-router-dom';
import Modal from '../../../../Components/Modal/Modal'; //permet d'afficher la popup lorsqu'on click sur le bouton quick view

const Products = ({result, handleClick, addToCart}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleEyeClick = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedProduct(null);
    };
    return (
        <>
            <section className={`${styles["section"]} ${styles["product"]}`}>
                <div className={styles["container"]}>
                    <h2 className={`${styles["h2"]} ${styles["section-title"]}`}>Recommended</h2>
                    <ul className={styles["filter-list"]}>
                        <li>
                            <button className={`${styles["filter-btn"]} ${styles["active"]}`} onClick={handleClick} value="">All</button>
                        </li>
                        <li>
                            <button className={styles["filter-btn"]}onClick={handleClick} value="BMW">BMW</button>
                        </li>
                        <li>
                            <button className={styles["filter-btn"]}onClick={handleClick} value="Toyota">Toyota</button>
                        </li>
                        <li>
                            <button className={styles["filter-btn"]}onClick={handleClick} value="Mustang">Mustang</button>
                        </li>
                        <li>
                            <button className={styles["filter-btn"]}onClick={handleClick} value="Nanfan">Nanfan</button>
                        </li>
                        <li>
                            <button className={styles["filter-btn"]}onClick={handleClick} value="Peugeot">Peugeot</button>
                        </li>
                    </ul>
                    <br />
                    <br />
                    <ul className={styles["product-list"]}>
                    {result.map((car, index) => (
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
                                        
                                        <li className={styles["card-action-item"]}>
                                            <button className={styles["card-action-btn"]} aria-labelledby="card-label-3" onClick={() => handleEyeClick(car)}>
                                                <ion-icon name="eye-outline" />
                                            </button>
                                            <div className={styles["card-action-tooltip"]} id="card-label-3">Quick View</div>
                                        </li>

                                        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>{/* permet d'afficher la popup lorsqu'on click sur le bouton quick view */}
                                                    {selectedProduct && (
                                                      <div>
                                                        <img src={selectedProduct.img} alt={selectedProduct.nom} />
                                                        <h2>{selectedProduct.nom}</h2>
                                                        <p>{selectedProduct.title}</p>
                                                        {/* Ajoutez d'autres caractéristiques du produit ici */}
                                                      </div>
                                                    )}
                                                  </Modal>
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
        </>
    );
};

export default Products;