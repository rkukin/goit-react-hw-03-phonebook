import React from "react";

export default function Filter ({handleChange}) {

    return (
        <input type="text" onChange={handleChange} name="filter" autoComplete='off'/>

    )

}