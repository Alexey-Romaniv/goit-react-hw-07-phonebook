import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectError,
} from 'redux/contacts/contactsSelector';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { filterContacts } from 'redux/filter/filterSlice';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import PhoneBookForm from './AddedForm/AddContacts';
fetchContacts();
export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = filterKey => {
    // setFilter(filterKey.target.value);

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

  return (
    <div>
      <Section title="Phonebook">
        <PhoneBookForm addContact={addNewContact} />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleChange} />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <ContactList onDeleteContact={contactDelete} />
        )}
      </Section>
    </div>
  );
};
