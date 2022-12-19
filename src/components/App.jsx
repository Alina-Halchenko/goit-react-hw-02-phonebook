import React, {Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'
import initialContacts from 'initialContacts.json';


export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  submitHandler = (contact, nameAdded) => {
    let nameFound = this.state.contacts.map(person => person.name).includes(nameAdded);
    
    if(nameFound){
      return alert(`${nameAdded} is already in the contact list`);
    }

    this.setState(prevState => ({
    contacts: [contact, ...prevState.contacts]
        }));
  }

  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  filterSearch = e => {
    this.setState({filter: e.currentTarget.value});
  }

  render() {
    const {contacts, filter} = this.state;
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"}}>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForApp={this.submitHandler}/>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.filterSearch}/>
      <ContactList contactsData={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>
    )
  }
}