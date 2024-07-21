import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <h1>gnaht41 Villa</h1>
                <p className="lead">No copyright</p>
                <div className={styles.footerLinks}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} gnaht41 Shop. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
