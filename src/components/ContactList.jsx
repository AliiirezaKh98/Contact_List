import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          index={index}
          contact={contact}
          onEditContact={onEditContact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
