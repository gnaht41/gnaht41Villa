import React from 'react';
import MyCarousel from '../../components/MyCarousel/MyCarousel';
import Feater from '../../components/Feater/Feater';
import PropertyDetailSection from '../../components/PropertyDetailSection/PropertyDetailSection';
import PropertyGrid from '../../components/PropertyGrid/PropertyGrid';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <MyCarousel />
            <Feater />
            <PropertyDetailSection />
            <PropertyGrid />
            <ContactForm />
        </div>
    )
}

export default Home
