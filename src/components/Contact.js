import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactData: [
                {name: 'Apple', phone: '010-0000-0001'},
                {name: 'Banana', phone: '010-0000-0002'},
                {name: 'David', phone: '010-0000-0004'},
                {name: 'Chalie', phone: '010-0000-0003'}
            ]
        };
    }    

    render() {
        const mapToComponent = (data) => {
            return data.map((contact, i) => {
                return <ContactInfo contact={contact} key={i} />;
            });
        };

        return (
            <div>
                <h1>Contact</h1>
                {mapToComponent(this.state.contactData)}
            </div>
        );
    }
}

export default Contact;