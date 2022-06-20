// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import contacts from '../data/contacts.json'


const Contact = ({data}) => {

    return (
        <>      
            <div class="container">
                <div class="card">
                        <div class="cardTitle">
                            <div>{data.photo}</div>
                        </div>
                        <div class="cardBody">
                            <div>{data.name}</div>
                            <div>{data.phone}</div>
                            <div>{data.email}</div>
                        </div>
                </div>
            </div>
        
         </>
    )
}

export default Contact;