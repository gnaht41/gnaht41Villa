import React from 'react';
import styles from './ImageSection.module.css';

const ImageSection = ({ title }) => {
    return (
        <div className={styles.imageSection}>
            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
