import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../assets/css/style.module.css"

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-top section"]}>
                <div className={styles["container"]}>
                    <div className={styles["footer-brand"]}>
                        <NavLink to="#" className={styles["logo"]}>
                            {/* <img src="./assets/images/logo.svg" width={160} height={50} alt="Footcap logo" /> */}
                            <p className={styles["logo-carshop"]}>OnTheRoad</p>
                        </NavLink>
                        <ul className={styles["social-list"]}>
                            <li>
                                <NavLink to="#" className={styles["social-link"]}>
                                    <ion-icon name="logo-facebook" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["social-link"]}>
                                    <ion-icon name="logo-twitter" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["social-link"]}>
                                    <ion-icon name="logo-pinterest" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["social-link"]}>
                                    <ion-icon name="logo-linkedin" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["footer-link-box"]}>
                        <ul className={styles["footer-list"]}>
                            <li>
                                <p className={styles["footer-list-title"]}>Contact Us</p>
                            </li>
                            <li>
                                <address className={styles["footer-link"]}>
                                    <ion-icon name="location" />
                                    <span className={styles["footer-link-text"]}>
                                        2751 S Parker Rd, Aurora, CO 80014, United States
                                    </span>
                                </address>
                            </li>
                            <li>
                                <NavLink to="tel:+557343673257" className={styles["footer-link"]}>
                                    <ion-icon name="call" />
                                    <span className={styles["footer-link-text"]}>+557343673257</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="mailto:footcap@help.com" className={styles["footer-link"]}>
                                    <ion-icon name="mail" />
                                    <span className={styles["footer-link-text"]}>footcap@help.com</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className={styles["footer-list"]}>
                            <li>
                                <p className={styles["footer-list-title"]}>My Account</p>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["footer-link"]}>
                                    <ion-icon name="chevron-forward-outline" />
                                    <span className={styles["footer-link-text"]}>My Account</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["footer-link"]}>
                                    <ion-icon name="chevron-forward-outline" />
                                    <span className={styles["footer-link-text"]}>View Cart</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["footer-link"]}>
                                    <ion-icon name="chevron-forward-outline" />
                                    <span className={styles["footer-link-text"]}>Wishlist</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["footer-link"]}>
                                    <ion-icon name="chevron-forward-outline" />
                                    <span className={styles["footer-link-text"]}>Compare</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className={styles["footer-link"]}>
                                    <ion-icon name="chevron-forward-outline" />
                                    <span className={styles["footer-link-text"]}>New Products</span>
                                </NavLink>
                            </li>
                        </ul>
                        <div className={styles["footer-list"]}>
                            <p className={styles["footer-list-title"]}>Opening Time</p>
                            <table className={styles["footer-table"]}>
                                <tbody>
                                    <tr className={styles["table-row"]}>
                                        <th className={styles["table-head"]} scope="row">Mon - Tue:</th>
                                        <td className={styles["table-data"]}>8AM - 10PM</td>
                                    </tr>
                                    <tr className={styles["table-row"]}>
                                        <th className={styles["table-head"]} scope="row">Wed:</th>
                                        <td className={styles["table-data"]}>8AM - 7PM</td>
                                    </tr>
                                    <tr className={styles["table-row"]}>
                                        <th className={styles["table-head"]} scope="row">Fri:</th>
                                        <td className={styles["table-data"]}>7AM - 12PM</td>
                                    </tr>
                                    <tr className={styles["table-row"]}>
                                        <th className={styles["table-head"]} scope="row">Sat:</th>
                                        <td className={styles["table-data"]}>9AM - 8PM</td>
                                    </tr>
                                    <tr className={styles["table-row"]}>
                                        <th className={styles["table-head"]} scope="row">Sun:</th>
                                        <td className={styles["table-data"]}>Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles["footer-list"]}>
                            <p className={styles["footer-list-title"]}>Newsletter</p>
                            <p className={styles["newsletter-text"]}>
                                Authoritatively morph 24/7 potentialities with error-free partnerships.
                            </p>
                            <form action="" className={styles["newsletter-form"]}>
                                <input type="email" name="email" required placeholder="Email Address" className="newsletter-input" />
                                <button type="submit" className={`${styles["btn"]} ${styles["btn-primary"]}`}>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["footer-bottom"]}>
                <div className={styles["container"]}>
                    <p className={styles["copyright"]}>
                        © 2022 <NavLink to="#" className={styles["copyright-link"]}>codewithsadee</NavLink>. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;