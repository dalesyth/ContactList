import React, { useEffect, useState } from "react";
// import dummyContacts from "../dummyData";
import ContactList from "./ContactList";
import SingleContact from "./SingleContact";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  // console.log(contacts)

  const getContacts = async () => {
    try {
      const response = await fetch(
        "http://jsonplace-univclone.herokuapp.com/users"
      );
      const result = await response.json();

      setContacts(result);
    } catch (err) {
      console.log("There was a problem getting the contacts!");
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const selectContact = async (contactId) => {
    try {
      const response = await fetch(
        `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
      );
      const result = await response.json();

      setSelectedContact(result);
    } catch (err) {
      console.log("There was a problem getting individual contact!");
    }
  };

  useEffect(() => {
    selectContact();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {/* <ContactList contacts = {contacts}/> */}
        {selectedContact.id ? (
          <SingleContact selectedContact={selectedContact} />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
};

export default Main;
