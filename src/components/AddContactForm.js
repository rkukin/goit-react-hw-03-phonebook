import React from "react";

export default function AddContactForm({handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input type="text" name="name" autoComplete='off'/>

            <h3>Number</h3>
            <input type="tel" name="number" autoComplete='off'/>

            <div>
                <button type="submit">Add contact</button>
            </div>
        </form>
    )

}