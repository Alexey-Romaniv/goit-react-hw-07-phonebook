import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';
import { selectFilter } from 'redux/filter/filterSelectors';

import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
`;
const DeleteBtn = styled.button`
  width: 100px;
  background-color: grey;
  color: white;
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: blue;
  }
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
              <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </DeleteBtn>
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
