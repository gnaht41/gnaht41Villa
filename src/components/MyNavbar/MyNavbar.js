import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './MyNavbar.module.css';
import logo from '../../assets/images/gnaht41 techlogo.png';

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container>
                <Navbar.Brand as={Link} to="/" className={styles.brand}>
                    <img src={logo} alt="Brand Logo" className={styles.logo} />
                    <span className={styles.brandText}>gnaht41</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`ms-auto ${styles.navbarNav}`}>
                        <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/properties" className={styles.navLink}>Properties</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
