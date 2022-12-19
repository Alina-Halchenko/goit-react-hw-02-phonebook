import React, {Component} from 'react';
import {ContactLi, Button, List} from './ContactList.styled'
import {ImAddressBook} from 'react-icons/im'

class ContactList extends Component {

  render() {
    return (
      <List>
        {this.props.contactsData.map(({id, name, number}) => (
          <ContactLi key={id}>
            <p><ImAddressBook /> {name}: {number}</p>
            <Button onClick={() => this.props.onDeleteContact(id)}>Delete</Button>
          </ContactLi>
        ))}
      </List>
    )
  }
}

export default ContactList;