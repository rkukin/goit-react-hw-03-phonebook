import React from "react";

export default function ContactListItem({handleDelete, contact: { id, name, number }}) {

    return (
        <li key={id}><p>{name}: {number}</p> <button onClick={() => handleDelete(id)}>Delete</button></li>
    )
}