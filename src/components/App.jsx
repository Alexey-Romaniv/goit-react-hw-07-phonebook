import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';

import { filterContacts } from 'redux/filter/filterSlice';
import { addContact, deleteContact } from '../redux/contacts/contactsSlice';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import PhoneBookForm from './AddedForm/AddContacts';
export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = filterKey => {
    // setFilter(filterKey.target.value);
    console.log(filterKey);

    console.log('1');
    dispatch(filterContacts(filterKey));
  };
  const addNewContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    const findSameContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (!findSameContact) {
      dispatch(addContact(newContact));
    } else {
      Notify.warning(`${name} is already in contacts.`);
    }
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };
  // const filterContacts = () => {
  //   if (filter) {
  //     return contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  //   return contacts;
  // };

  return (
    <div>
      <Section title="Phonebook">
        <PhoneBookForm addContact={addNewContact} />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleChange} />
        <ContactList onDeleteContact={contactDelete} />
      </Section>
    </div>
  );
};
