import React, { useState } from 'react';
import property1 from '../../assets/images/property-01.jpg';
import property2 from '../../assets/images/property-02.jpg';
import property3 from '../../assets/images/property-03.jpg';
import property4 from '../../assets/images/property-04.jpg';
import property5 from '../../assets/images/property-05.jpg';
import property6 from '../../assets/images/property-06.jpg';
import styles from './PropertyMenu.module.css';

const PropertyMenu = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('all');

    // Danh sách sản phẩm với 9 sản phẩm
    const properties = [
        { imageUrl: property1, price: '$2,264,000', address: '18 New Street Miami, OR 97219', bedrooms: 4, bathrooms: 4, area: 545, type: 'Luxury Villa' },
        { imageUrl: property2, price: '$1,180,000', address: '54 Mid Street Florida, OR 27001', bedrooms: 3, bathrooms: 3, area: 450, type: 'Luxury Villa' },
        { imageUrl: property3, price: '$1,480,000', address: '26 Old Street Miami, OR 38540', bedrooms: 3, bathrooms: 4, area: 2251, type: 'Luxury Villa' },
        { imageUrl: property4, price: '$584,500', address: '12 New Street Miami, OR 12650', bedrooms: 4, bathrooms: 4, area: 1925, type: 'Apartment' },
        { imageUrl: property5, price: '$925,600', address: '34 Beach Street Miami, OR 42680', bedrooms: 4, bathrooms: 4, area: 1800, type: 'Penthouse' },
        { imageUrl: property6, price: '$450,000', address: '22 New Street Portland, OR 16540', bedrooms: 3, bathrooms: 2, area: 1356, type: 'Modern Condo' },
        { imageUrl: property1, price: '$2,264,000', address: '18 New Street Miami, OR 97219', bedrooms: 4, bathrooms: 4, area: 545, type: 'Luxury Villa' },
        { imageUrl: property2, price: '$1,180,000', address: '54 Mid Street Florida, OR 27001', bedrooms: 3, bathrooms: 3, area: 450, type: 'Luxury Villa' },
        { imageUrl: property3, price: '$1,480,000', address: '26 Old Street Miami, OR 38540', bedrooms: 3, bathrooms: 4, area: 2251, type: 'Luxury Villa' }
    ];

    const itemsPerPage = 9;
    const filteredProperties = filter === 'all' ? properties : properties.filter(p => p.type.toLowerCase() === filter);
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

    const currentProperties = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleFilter = (type) => {
        setFilter(type);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.propertyMenu}>
            <h1 className={styles.mainTitle}>Discover Your Perfect Home</h1>
            <div className={styles.filterButtons}>
                <button className={filter === 'all' ? styles.active : ''} onClick={() => handleFilter('all')}>Show All</button>
                <button className={filter === 'apartment' ? styles.active : ''} onClick={() => handleFilter('apartment')}>Apartment</button>
                <button className={filter === 'villa' ? styles.active : ''} onClick={() => handleFilter('villa')}>Villa</button>
                <button className={filter === 'penthouse' ? styles.active : ''} onClick={() => handleFilter('penthouse')}>Penthouse</button>
            </div>
            <div className={styles.gridContainer}>
                {currentProperties.map((property, index) => (
                    <div key={index} className={`${styles.propertyItem} ${styles[`property-${property.type.toLowerCase()}`]}`}>
                        <div className={styles.propertyImage}>
                            <img src={property.imageUrl} alt={property.address} />
                        </div>
                        <div className={styles.propertyDetails}>
                            <h3>{property.price}</h3>
                            <p>{property.address}</p>
                            <p>{property.bedrooms} bedrooms, {property.bathrooms} bathrooms, {property.area} sq ft</p>
                            <button className={styles.scheduleVisitBtn}>Schedule a visit</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    &laquo; Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={i + 1 === currentPage ? styles.activePage : ''}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next &raquo;
                </button>
            </div>
        </div>
    );
};

export default PropertyMenu;
