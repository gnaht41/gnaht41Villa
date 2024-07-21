import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <h2>Contact Us</h2>
            <ul>
                <li className={styles.infoItem}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <div className={styles.infoDetails}>
                        <strong>Address:</strong>
                        <p>123 Main Street, Hometown, TP.Vũng Tàu</p>
                    </div>
                </li>
                <li className={styles.infoItem}>
                    <FaPhoneAlt className={styles.icon} />
                    <div className={styles.infoDetails}>
                        <strong>Phone:</strong>
                        <p>0982220716</p>
                    </div>
                </li>
                <li className={styles.infoItem}>
                    <FaEnvelope className={styles.icon} />
                    <div className={styles.infoDetails}>
                        <strong>Email:</strong>
                        <p>gnaht41@gmail.com</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
