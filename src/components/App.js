import React, {Component} from "react";
import {uuid} from 'uuidv4';
import AddContactForm from "./AddContactForm";
import ContactListItem from "./ContactListItem";
import ContactList from "./ContactList";
import Filter from "./Filter";

export default class App extends Component {

  state = {
    contacts: [],
    filter: ''
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name=\'name\']').value;
    const number = form.querySelector('[name=\'number\']').value;

    const {contacts} = this.state;

    if (name === "" || number === "") {
      alert("Please fill all fields!")
    } else if (contacts.find(element => (element.name.toLowerCase() === name.toLowerCase()))) {
      alert("This contact already added!")
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {id: uuid(), name: name, number: number}]
      }));
      this.setState({name: "", number: ""});
      form.reset();
    }
  };

  handleDelete = (contactId) => {
    const {contacts} = this.state;
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    this.setState({contacts: newContacts});
  };

  getFilteredContacts() {
    const {contacts, filter} = this.state;
    const filteredResults = contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    if (filter === "") {
      return contacts;
    }
    if (filteredResults.length) {
      return filteredResults;
    }
    return [];
  }

  render() {
    return (
      <>
        <h2>PhoneBook</h2>
        <AddContactForm handleSubmit={this.handleSubmit}/>
        <h3>Contacts</h3>
        <Filter handleChange={this.handleChange}/>
        <ContactList>
          {this.getFilteredContacts().map(contact => {
            return <ContactListItem key={contact.id} contact={contact} handleDelete={this.handleDelete}/>
          })}
        </ContactList>
      </>
    )
  }
}

App.propTypes = {};
