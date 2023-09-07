import React, { useState } from "react";
import { useEffect } from 'react'
import ContactRow from "./ContactRow";

const ContactList = () => {
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState('')

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await response.json()
                setContacts(result)
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchContacts()
    }, [])

    return (
        <>
            <h1>{selectedContact}</h1>

            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {
                        contacts.map((contact) => {
                            return <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact}/>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ContactList