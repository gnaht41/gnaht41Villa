import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ImageSection from '../../components/ImageSection/ImageSection';
import Map from '../../components/Map/Map';

const Contact = () => {
    return (
        <div>
            <ImageSection title="Start a Conversation" />
            <ContactForm />
            <ContactInfo />
            <Map />
        </div>
    )
}

export default Contact
