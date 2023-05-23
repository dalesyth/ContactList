import react from "react";

const ContactRow = ({contacts}) => {
   return (
     <tr key={contact.id}>
       <td>{contact.name}</td>
       <td>{contact.phone}</td>
       <td>{contact.email}</td>
     </tr>
   );
    
}

export default ContactRow