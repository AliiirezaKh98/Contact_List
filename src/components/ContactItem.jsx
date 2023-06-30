import React, { useState } from 'react';

const ContactItem = ({ index, contact, onEditContact, onDeleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditContact(index, name, email, phoneNumber);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteContact(index);
  };

  return (
    <div className="contact-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="contact-item-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <div className="contact-item-name">{contact.name}</div>
          <div className="contact-item-details">
            <div>Email: {contact.email}</div>
            <div>Phone: {contact.phoneNumber}</div>
          </div>
          <div className="contact-item-buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactItem;
