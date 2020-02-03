import React, {Component} from "react";
import PropTypes from 'prop-types';
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

export default class AddContactForm extends Component {

  state = {
    name: '',
    number: ''
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({name: '', number: ''});
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <FormInput type="text" name="name" id="name" value={this.state.name} autoComplete='off'
                   onChange={this.handleChange}/>

        <InputLabel htmlFor="number">Number</InputLabel>
        <FormInput type="tel" name="number" id="number" value={this.state.number} autoComplete='off'
                   onChange={this.handleChange}/>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactsForm>
    )
  }
};

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
};