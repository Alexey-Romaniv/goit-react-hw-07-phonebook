import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';
import { selectFilter } from 'redux/filter/filterSelectors';

import styled from 'styled-components';
import { ContactBtn } from 'components/AddedForm/AddContacts';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
`;

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  return (
    <List>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name}: {number}{' '}
              <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </ContactBtn>
            </ListItem>
          );
        })}
    </List>
  );
};

// ContactList.propTypes = {
//   filterList: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired)
//   ),
// };
