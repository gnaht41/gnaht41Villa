import React from 'react';
import property1 from '../../assets/images/property-01.jpg';
import property2 from '../../assets/images/property-02.jpg';
import property3 from '../../assets/images/property-03.jpg';
import property4 from '../../assets/images/property-04.jpg';
import property5 from '../../assets/images/property-05.jpg';
import property6 from '../../assets/images/property-06.jpg';
import styles from './PropertyGrid.module.css';

const PropertiesGrid = () => {
    const properties = [
        {
            imageUrl: property1,
            price: '$2,264,000',
            address: '18 New Street Miami, OR 97219',
            bedrooms: 4,
            bathrooms: 4,
            area: 545,
            type: 'Luxury Villa'
        },
        {
            imageUrl: property2,
            price: '$1,180,000',
            address: '54 Mid Street Florida, OR 27001',
            bedrooms: 3,
            bathrooms: 3,
            area: 450,
            type: 'Luxury Villa'
        },
        {
            imageUrl: property3,
            price: '$1,480,000',
            address: '26 Old Street Miami, OR 38540',
            bedrooms: 3,
            bathrooms: 4,
            area: 2251,
            type: 'Luxury Villa'
        },
        {
            imageUrl: property4,
            price: '$584,500',
            address: '12 New Street Miami, OR 12650',
            bedrooms: 4,
            bathrooms: 4,
            area: 1925,
            type: 'Apartment'
        },
        {
            imageUrl: property5,
            price: '$925,600',
            address: '34 Beach Street Miami, OR 42680',
            bedrooms: 4,
            bathrooms: 4,
            area: 1800,
            type: 'Penthouse'
        },
        {
            imageUrl: property6,
            price: '$450,000',
            address: '22 New Street Portland, OR 16540',
            bedrooms: 3,
            bathrooms: 2,
            area: 1356,
            type: 'Modern Condo'
        }
    ];

    return (
        <div className={styles.propertiesGrid}>
            <h1>We Provide The Best Property You Like</h1>
            <div className={styles.gridContainer}>
                {properties.map((property, index) => (
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
        </div>
    );
};

export default PropertiesGrid;
