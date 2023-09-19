import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Phonebook } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (contact, actions) => {
    if (this.state.contacts.some(c => contact.name === c.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
    actions.resetForm();
  };

  filterChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normilizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );

    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} filterChange={this.filterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </Phonebook>
    );
  }
}
