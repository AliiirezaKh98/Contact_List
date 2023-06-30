import React, { useState } from 'react';
import './App.css';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (name, email, phoneNumber) => {
    const newContact = { name, email, phoneNumber };
    setContacts([...contacts, newContact]);
  };

  const handleEditContact = (index, name, email, phoneNumber) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = { name, email, phoneNumber };
    setContacts(updatedContacts);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="app-title">Contact List</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ContactList
        contacts={filteredContacts}
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />
      <div className="add-contact-form">
        <AddContactForm onAddContact={handleAddContact} />
      </div>
    </div>
  );
};

export default App;
