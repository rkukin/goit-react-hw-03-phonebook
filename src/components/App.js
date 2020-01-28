import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { uuid } from 'uuidv4';

export default class App extends Component{

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    const { name, number } = this.state;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id: uuid(), name: name, number: number}]
    }));
    this.setState({name: "", number: ""});
  };

  //TODO
  handleSearch = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });

  };

  handleDelete = (e) => {
    console.log(e)
    console.log(e.target)
  };


  render(){
    const { name, number, filter, contacts } = this.state;

    return (
      <>
      <h2>PhoneBook</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <label>Name
            <input type="text" value={name} onChange={this.handleChange} name="name" autoComplete='off'/>
          </label>
          <h3>Number</h3>
          <label>Number
            <input type="tel" value={number} onChange={this.handleChange} name="number" autoComplete='off'/>
          </label>
          <div>
            <button type="submit">Add contact</button>

          </div>
        </form>
          <h3>Contacts</h3>
          <input type="text" value={filter} onChange={this.handleSearch} name="filter" autoComplete='off'/>
          <ul>

            {contacts.map(contact => (
                <li key={contact.id}>{contact.name}: {contact.number} <button onClick={this.handleDelete}>Delete</button></li>
              ))}

          </ul>

      </>
    )
  }


}

App.propTypes = {

};
