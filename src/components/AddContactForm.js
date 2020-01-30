import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const ContactsForm = styled.form`
border: 2px solid black;
max-width: 400px;
padding: 10px;
display: flex;
flex-direction: column;
`;

const InputLabel = styled.label`
max-width: 40%;
font-size: 20px;
`;

const FormInput = styled.input`
max-width: 40%;
margin-top: 10px;
margin-bottom: 30px;
`;

const SubmitButton = styled.button`
max-width: 30%;
border-radius: 5px;
`;

export default function AddContactForm({handleSubmit}) {

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <InputLabel htmlFor="name">Name</InputLabel>
      <FormInput type="text" name="name" id="name" autoComplete='off'/>

      <InputLabel htmlFor="number">Number</InputLabel>
      <FormInput type="tel" name="number" id="number" autoComplete='off'/>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactsForm>
  )
}

AddContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};