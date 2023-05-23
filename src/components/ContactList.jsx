import react from "react";

const ContactList = ({ contacts }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {contacts.map((contact) => {
          return( 
          <ContactRow />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
