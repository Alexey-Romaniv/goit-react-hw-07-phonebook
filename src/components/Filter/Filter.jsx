import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'components/AddedForm/AddContacts';

export const Filter = ({ handleChange }) => {
  const handleFilterInput = ({ target: { value } }) => {
    handleChange(value.toLowerCase());
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={e => handleFilterInput(e)} />
    </Label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};
