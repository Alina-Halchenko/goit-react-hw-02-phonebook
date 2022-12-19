import React, {Component} from 'react';
import {Button} from 'components/ContactList/ContactList.styled'
import {Form} from './ContactList.styled'
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }
  handleSubmit = e => {
    e.preventDefault();
    let id = nanoid();
    let contact = {id, ...this.state};

    this.props.onSubmitForApp(contact, this.state.name);
    this.reset();
  }

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({ [name]: value} );
  }

  reset = () => {
    this.setState({ name: '', number: ''})
  }

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="number">Number</label>

        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type='submit'>Add contact</Button>
      </Form>
    )
  }
}

export default ContactForm;