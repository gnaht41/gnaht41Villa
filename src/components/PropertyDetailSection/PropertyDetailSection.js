import React, { useState } from 'react';
import styles from './PropertyDetailSection.module.css';
import villaImg from '../../assets/images/deal-01.jpg';
import apartmentImg from '../../assets/images/deal-02.jpg';
import penthouseImg from '../../assets/images/deal-03.jpg';

const PropertyDetails = () => {
    const [activeTab, setActiveTab] = useState('villa');

    const propertyData = {
        villa: {
            image: villaImg,
            totalFlat: '400 m2',
            floorNumber: '2nd',
            rooms: '6',
            parking: 'Yes',
            payment: 'Cash',
            extraInfo: 'This is a luxurious villa with a large backyard and a private pool.'
        },
        apartment: {
            image: apartmentImg,
            totalFlat: '185 m2',
            floorNumber: '26th',
            rooms: '4',
            parking: 'Yes',
            payment: 'Bank',
            extraInfo: 'This is a modern apartment with city views and access to a shared swimming pool.'
        },
        penthouse: {
            image: penthouseImg,
            totalFlat: '250 m2',
            floorNumber: '35th',
            rooms: '5',
            parking: 'Yes',
            payment: 'Bank',
            extraInfo: 'This is a spacious penthouse with a private roof terrace and luxury finishings.'
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabBar}>
                <div
                    className={`${styles.tabItem} ${activeTab === 'villa' ? styles.active : ''}`}
                    onClick={() => handleTabClick('villa')}
                >
                    Villa
                </div>
                <div
                    className={`${styles.tabItem} ${activeTab === 'apartment' ? styles.active : ''}`}
                    onClick={() => handleTabClick('apartment')}
                >
                    Apartment
                </div>
                <div
                    className={`${styles.tabItem} ${activeTab === 'penthouse' ? styles.active : ''}`}
                    onClick={() => handleTabClick('penthouse')}
                >
                    Penthouse
                </div>
            </div>

            <div className={styles.horizontalLayout}>
                <div className={styles.imageSection}>
                    <img src={propertyData[activeTab].image} alt="Property" className={styles.propertyImage} />
                </div>
                <div className={styles.detailsSection}>
                    <div className={styles.propertyDetails}>
                        <div className={styles.detail}>
                            <div className={styles.label}>Total Flat Space</div>
                            <div className={styles.value}>{propertyData[activeTab].totalFlat}</div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.label}>Floor number</div>
                            <div className={styles.value}>{propertyData[activeTab].floorNumber}</div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.label}>Number of rooms</div>
                            <div className={styles.value}>{propertyData[activeTab].rooms}</div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.label}>Parking Available</div>
                            <div className={styles.value}>{propertyData[activeTab].parking}</div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.label}>Payment Process</div>
                            <div className={styles.value}>{propertyData[activeTab].payment}</div>
                        </div>
                    </div>
                    <div className={styles.extraInfo}>
                        <h3>Extra Info About Property</h3>
                        <p>{propertyData[activeTab].extraInfo}</p>
                        <button className={styles.button}>Schedule a visit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
