import React from 'react';
import styles from './Feater.module.css';
import FeaterImg from '../../assets/images/featured.jpg';

const Feater = () => {
    return (
        <section className={styles.featured}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={FeaterImg} alt="Featured luxury apartment with sea view" className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Best Apartment & Sea View</h2>
                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <i className="fas fa-arrows-alt-h"></i>
                            <span>250 m2</span>
                            <p>Total Flat Space</p>
                        </div>
                        <div className={styles.detailItem}>
                            <i className="fas fa-file-contract"></i>
                            <span>Contract</span>
                            <p>Contract Ready</p>
                        </div>
                        <div className={styles.detailItem}>
                            <i className="fas fa-credit-card"></i>
                            <span>Payment</span>
                            <p>Payment Process</p>
                        </div>
                        <div className={styles.detailItem}>
                            <i className="fas fa-shield-alt"></i>
                            <span>24/7</span>
                            <p>Under Control</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <h3>Best Useful Links</h3>
                        <p>Get the best villa website template in HTML, CSS, and Bootstrap for your business. TemplateKo provides you the best free CSS templates in the world.</p>
                        <h3>How Does This Work?</h3>
                        <p>Villa Agency is the best choice for your real estate needs. Contact us to learn more about our services.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feater;
