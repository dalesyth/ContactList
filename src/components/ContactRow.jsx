import react from "react";

const ContactRow = (props) => {
  // console.log(contact.id);
  // console.log(selectContact);
  return (
    <tr onClick={() => props.selectContact(props.contact.id)}>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
    </tr>
  );
};

export default ContactRow;
