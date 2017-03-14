import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            contactData: [
                {name: 'Apple', phone: '010-0000-0001'},
                {name: 'Banana', phone: '010-0000-0002'},
                {name: 'David', phone: '010-0000-0004'},
                {name: 'Chalie', phone: '010-0000-0003'}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }    

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const mapToComponent = (data) => {
            data.sort((a,b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                } else {
                    return 1;
                }

                return 0;
            });
            data = data.filter(contact => {
                return contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1;
            });

            return data.map((contact, i) => {
                return <ContactInfo contact={contact} key={i} />;
            });
        };

        return (
            <div>
                <h1>Contact</h1>
                <input name="keyword" placeholder="Search"
                       value={this.state.keyword} onChange={this.handleChange} />
                {mapToComponent(this.state.contactData)}
            </div>
        );
    }
}

export default Contact;