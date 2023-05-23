import react from "react";
import ContactRow from "./ContactRow";

const ContactList = (props) => {
  // console.log(contacts);
  // console.log(selectContact)
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {props.contacts.map((contact) => {
          return( 
          <ContactRow contact = {contact} key = {contact.id} selectContact = {props.selectContact}/>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
