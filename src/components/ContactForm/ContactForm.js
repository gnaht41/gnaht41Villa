import React from 'react';
import styles from './ContactForm.module.css';
import contactImg from '../../assets/images/map.png';

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Get In Touch With Our Agents</h2>
            <div className={styles.formWrapper}>
                <div className={styles.mapContainer}>
                    <img src={contactImg} alt="Professional Office" className={styles.mapImage} />
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder="Your Name..." />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input type="email" id="email" name="email" className={styles.input} placeholder="Your E-mail..." />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <input type="text" id="subject" name="subject" className={styles.input} placeholder="Subject..." />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" name="message" className={styles.textarea} placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Send Message</button>
                    </form>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <i className={`fas fa-phone-alt ${styles.icon}`}></i>
                            <a href="tel:010-020-0340" className={styles.contactLink}>0982220716</a>
                        </div>
                        <div className={styles.contactItem}>
                            <i className={`fas fa-envelope ${styles.icon}`}></i>
                            <a href="mailto:info@villa.co" className={styles.contactLink}>gnaht41@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
