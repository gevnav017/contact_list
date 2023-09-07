import React from "react";

const ContactRow = ({ contact, setSelectedContact }) => {
    const contactName = contact.name

    const handleClick = () => {
        setSelectedContact(contactName)
    }

    return (
      <tr
        onClick = {handleClick}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
}

export default ContactRow